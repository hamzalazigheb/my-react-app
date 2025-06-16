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

  useEffect(() => {
    if (session) {
      fetchContacts();
    }
  }, [session]);

  const fetchContacts = () => {
    try {
      console.log('Tentative de récupération des contacts...');
      const allContacts = store.getContacts();
      console.log('Contacts récupérés:', allContacts);
      setContacts(allContacts);
      setLoading(false);
      setError(null);
    } catch (err) {
      console.error('Erreur lors de la récupération des contacts:', err);
      setError('Erreur lors du chargement des contacts. Veuillez réessayer.');
      setLoading(false);
    }
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

  const filteredContacts = contacts.filter(contact => 
    contact.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.telephone.includes(searchTerm) ||
    contact.age.toString().includes(searchTerm)
  );

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

      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Rechercher un contact..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.contactsList}>
          {filteredContacts.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center' }}>
              {searchTerm ? 'Aucun contact ne correspond à votre recherche' : 'Aucun contact enregistré'}
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
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.map(contact => (
                  <tr 
                    key={contact.id}
                    className={selectedContact?.id === contact.id ? styles.selected : ''}
                    onClick={() => setSelectedContact(contact)}
                  >
                    <td>{contact.source === 'main' ? 'Chatbot Principal' : 
                         contact.source === 'investment' ? 'Chatbot Investissement' :
                         contact.source === 'fiscal' ? 'Chatbot Fiscal' : contact.source}</td>
                    <td>{contact.nom}</td>
                    <td>{contact.prenom}</td>
                    <td>{contact.email}</td>
                    <td>{contact.age} ans</td>
                    <td>{contact.telephone}</td>
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
              <p><strong>Source :</strong> {selectedContact.source === 'main' ? 'Chatbot Principal' : 
                                         selectedContact.source === 'investment' ? 'Chatbot Investissement' :
                                         selectedContact.source === 'fiscal' ? 'Chatbot Fiscal' : selectedContact.source}</p>
              <p><strong>Nom :</strong> {selectedContact.nom}</p>
              <p><strong>Prénom :</strong> {selectedContact.prenom}</p>
              <p><strong>Email :</strong> {selectedContact.email}</p>
              <p><strong>Âge :</strong> {selectedContact.age} ans</p>
              <p><strong>Téléphone :</strong> {selectedContact.telephone}</p>
              <p><strong>Date d'ajout :</strong> {new Date(selectedContact.createdAt).toLocaleString()}</p>
              {selectedContact.additionalData && (
                <div className={styles.additionalData}>
                  <h3>Données supplémentaires</h3>
                  <p>{selectedContact.additionalData}</p>
                </div>
              )}
              
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