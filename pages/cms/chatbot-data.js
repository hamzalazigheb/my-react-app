import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { store } from '../../utils/store';
import styles from '../../styles/CMS.module.css';

export default function ChatbotData() {
  const { data: session } = useSession();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [filterSource, setFilterSource] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [savingStatus, setSavingStatus] = useState({});

  useEffect(() => {
    if (session) {
      fetchContacts();
    }
  }, [session]);

  const fetchContacts = () => {
    fetch('/api/chatbot-contacts')
      .then(res => res.json())
      .then(data => {
        setContacts(data);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        setError('Erreur lors du chargement des contacts. Veuillez réessayer.');
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce contact ?')) {
      try {
        console.log('Tentative de suppression du contact:', id);
        const deletedContact = store.deleteContact(id);
        if (deletedContact) {
          console.log('Contact supprimé avec succès:', deletedContact);
          fetchContacts();
          if (selectedContact?.id === id) {
            setSelectedContact(null);
          }
        } else {
          console.error('Contact non trouvé:', id);
          setError('Contact non trouvé');
        }
      } catch (err) {
        console.error('Erreur lors de la suppression du contact:', err);
        setError('Erreur lors de la suppression du contact');
      }
    }
  };

  const handleStatusChange = async (contactId, newStatus) => {
    try {
      console.log('Tentative de mise à jour du statut:', { contactId, newStatus });
      
      // Indiquer que la sauvegarde est en cours
      setSavingStatus(prev => ({ ...prev, [contactId]: true }));
      
      // Mettre à jour immédiatement l'état local pour une réponse instantanée
      setContacts(prevContacts => 
        prevContacts.map(contact => 
          contact.id === contactId 
            ? { ...contact, pris_en_charge: newStatus }
            : contact
        )
      );
      
      // Mettre à jour le contact sélectionné si nécessaire
      if (selectedContact?.id === contactId) {
        setSelectedContact(prev => ({ ...prev, pris_en_charge: newStatus }));
      }
      
      // Ensuite, envoyer la mise à jour à l'API
      const response = await fetch('/api/update-contact-status', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: contactId,
          pris_en_charge: newStatus
        })
      });

      const result = await response.json();
      console.log('Réponse de l\'API:', result);

      if (response.ok) {
        console.log('Statut mis à jour avec succès');
        // Optionnel : rafraîchir les données depuis le serveur
        // fetchContacts();
      } else {
        console.error('Erreur API:', result);
        // En cas d'erreur, on peut remettre l'ancien statut ou laisser l'utilisateur décider
        setError(`Erreur lors de la sauvegarde: ${result.message}`);
        
        // Optionnel : remettre l'ancien statut en cas d'erreur
        // setContacts(prevContacts => 
        //   prevContacts.map(contact => 
        //     contact.id === contactId 
        //       ? { ...contact, pris_en_charge: !newStatus }
        //       : contact
        //   )
        // );
      }
    } catch (err) {
      console.error('Erreur lors de la mise à jour du statut:', err);
      setError(`Erreur de connexion: ${err.message}`);
      
      // Optionnel : remettre l'ancien statut en cas d'erreur
      // setContacts(prevContacts => 
      //   prevContacts.map(contact => 
      //     contact.id === contactId 
      //       ? { ...contact, pris_en_charge: !newStatus }
      //       : contact
      //   )
      // );
    } finally {
      // Indiquer que la sauvegarde est terminée
      setSavingStatus(prev => ({ ...prev, [contactId]: false }));
    }
  };

  // Filtrage avancé
  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = 
      contact.nom?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.prenom?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.telephone?.includes(searchTerm) ||
      contact.age?.toString().includes(searchTerm) ||
      contact.situation_matrimoniale?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.tmi?.includes(searchTerm) ||
      contact.placements_actuels?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSource = !filterSource || contact.source === filterSource;
    const matchesStatus = filterStatus === '' || 
      (filterStatus === 'pris' && contact.pris_en_charge) ||
      (filterStatus === 'non_pris' && !contact.pris_en_charge);

    return matchesSearch && matchesSource && matchesStatus;
  });

  // Mapping source pour affichage
  const getSourceLabel = (source) => {
    const sourceMap = {
      'chatbot_fiscal': 'Chatbot Fiscal',
      'chatbot_acceuil': 'Chatbot Accueil',
      'chatbot_invest': 'Chatbot Investissement',
      'chatbot_transmission': 'Chatbot Transmission',
      'chatbot_retraite': 'Chatbot Retraite'
    };
    return sourceMap[source] || source || 'Inconnu';
  };

  // Obtenir les sources uniques pour le filtre
  const uniqueSources = [...new Set(contacts.map(contact => contact.source))];

  if (!session) {
    return (
      <div className={styles.container}>
        <h1>Accès non autorisé</h1>
        <p>Veuillez vous connecter pour accéder à cette page.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className={styles.container}>
        <h1>Chargement...</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1>Données du Chatbot</h1>
      
      {error && (
        <div className={styles.errorMessage}>
          {error}
          <button 
            onClick={() => {
              setError(null);
              fetchContacts();
            }}
            style={{ marginLeft: '10px' }}
          >
            Réessayer
          </button>
        </div>
      )}

      {/* Barre de recherche et filtres */}
      <div className={styles.searchAndFilters}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Rechercher un contact..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className={styles.filters}>
          <select 
            value={filterSource} 
            onChange={(e) => setFilterSource(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="">Toutes les sources</option>
            {uniqueSources.map(source => (
              <option key={source} value={source}>
                {getSourceLabel(source)}
              </option>
            ))}
          </select>
          
          <select 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="">Tous les statuts</option>
            <option value="pris">Pris en charge</option>
            <option value="non_pris">Non pris en charge</option>
          </select>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contactsList}>
          {filteredContacts.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center' }}>
              {searchTerm || filterSource || filterStatus ? 'Aucun contact ne correspond à vos critères' : 'Aucun contact enregistré'}
            </div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Source</th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Email</th>
                  <th>Âge</th>
                  <th>Téléphone</th>
                  <th>Pris en charge</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.map(contact => (
                  <tr 
                    key={contact.id}
                    className={`${selectedContact?.id === contact.id ? styles.selected : ''} ${contact.pris_en_charge ? styles.prisEnCharge : ''}`}
                    onClick={() => setSelectedContact(contact)}
                  >
                    <td>{getSourceLabel(contact.source)}</td>
                    <td>{contact.nom}</td>
                    <td>{contact.prenom}</td>
                    <td>{contact.email}</td>
                    <td>{contact.age} ans</td>
                    <td>{contact.telephone}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <input
                          type="checkbox"
                          checked={contact.pris_en_charge || false}
                          onChange={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            const newStatus = e.target.checked;
                            console.log('Changement de statut:', { contactId: contact.id, newStatus });
                            handleStatusChange(contact.id, newStatus);
                          }}
                          className={styles.statusCheckbox}
                          onClick={(e) => e.stopPropagation()}
                          disabled={savingStatus[contact.id]}
                        />
                        {savingStatus[contact.id] && (
                          <span style={{ fontSize: '12px', color: '#666' }}>Sauvegarde...</span>
                        )}
                      </div>
                    </td>
                    <td>
                      <button
                        className={styles.deleteButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(contact.id);
                        }}
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {selectedContact && (
          <div className={styles.contactDetails}>
            <h2>Détails du contact</h2>
            <div className={styles.detailsContent}>
              <p><strong>Source :</strong> {getSourceLabel(selectedContact.source)}</p>
              <p><strong>Nom :</strong> {selectedContact.nom}</p>
              <p><strong>Prénom :</strong> {selectedContact.prenom}</p>
              <p><strong>Email :</strong> {selectedContact.email}</p>
              <p><strong>Âge :</strong> {selectedContact.age} ans</p>
              <p><strong>Téléphone :</strong> {selectedContact.telephone}</p>
              <p><strong>Date d'ajout :</strong> {new Date(selectedContact.createdAt).toLocaleString()}</p>
              
              {/* Informations supplémentaires du chatbot */}
              {selectedContact.situation_matrimoniale && (
                <p><strong>Situation matrimoniale :</strong> {selectedContact.situation_matrimoniale}</p>
              )}
              {selectedContact.enfants && (
                <p><strong>Enfants :</strong> {selectedContact.enfants}</p>
              )}
              {selectedContact.tmi && (
                <p><strong>TMI :</strong> {selectedContact.tmi}</p>
              )}
              {selectedContact.placements_actuels && (
                <p><strong>Placements :</strong> {selectedContact.placements_actuels}</p>
              )}
              
              <div className={styles.statusSection}>
                <label className={styles.statusLabel}>
                  <input
                    type="checkbox"
                    checked={selectedContact.pris_en_charge || false}
                    onChange={(e) => {
                      const newStatus = e.target.checked;
                      console.log('Changement de statut (détails):', { contactId: selectedContact.id, newStatus });
                      handleStatusChange(selectedContact.id, newStatus);
                    }}
                    className={styles.statusCheckbox}
                    disabled={savingStatus[selectedContact.id]}
                  />
                  Pris en charge
                  {savingStatus[selectedContact.id] && (
                    <span style={{ fontSize: '12px', color: '#666', marginLeft: '8px' }}>Sauvegarde...</span>
                  )}
                </label>
              </div>
              
              <div className={styles.actionButtons}>
                <a 
                  href={`mailto:${selectedContact.email}`}
                  className={styles.emailButton}
                >
                  Envoyer un email
                </a>
                <a 
                  href={`tel:${selectedContact.telephone}`}
                  className={styles.callButton}
                >
                  Appeler
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 