// Store global pour les contacts du chatbot
let contacts = [];
let nextId = 1;

// Charger les données au démarrage
try {
  const storedData = localStorage.getItem('chatbot_contacts');
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    contacts = parsedData.contacts || [];
    nextId = parsedData.nextId || 1;
  }
} catch (error) {
  console.error('Erreur lors du chargement des contacts:', error);
}

// Sauvegarder les données dans le localStorage
const saveToStorage = () => {
  try {
    localStorage.setItem('chatbot_contacts', JSON.stringify({
      contacts,
      nextId
    }));
  } catch (error) {
    console.error('Erreur lors de la sauvegarde des contacts:', error);
  }
};

export const store = {
  // Ajouter un nouveau contact
  addContact(contactData, source = 'main') {
    const newContact = {
      id: nextId++,
      ...contactData,
      source, // Ajout de la source (main, investment, fiscal)
      createdAt: new Date().toISOString()
    };
    contacts.push(newContact);
    console.log('Nouveau contact ajouté:', newContact);
    saveToStorage();
    return newContact;
  },

  // Récupérer tous les contacts
  getContacts(source = null) {
    if (source) {
      return contacts.filter(contact => contact.source === source);
    }
    return [...contacts];
  },

  // Supprimer un contact
  deleteContact(id) {
    const index = contacts.findIndex(contact => contact.id === id);
    if (index === -1) return null;
    const deletedContact = contacts[index];
    contacts = contacts.filter(contact => contact.id !== id);
    saveToStorage();
    return deletedContact;
  },

  // Réinitialiser le store
  reset() {
    contacts = [];
    nextId = 1;
    saveToStorage();
    console.log('Store réinitialisé');
  }
}; 