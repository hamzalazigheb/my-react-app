import pool from '../../utils/db';

export default async function handler(req, res) {
  try {
    // Vérifier si la colonne pris_en_charge existe
    const [columns] = await pool.query(`
      SELECT COLUMN_NAME 
      FROM INFORMATION_SCHEMA.COLUMNS 
      WHERE TABLE_SCHEMA = 'azalee_patrimoine' 
      AND TABLE_NAME = 'chatbotacceuil' 
      AND COLUMN_NAME = 'pris_en_charge'
    `);

    let query;
    if (columns.length > 0) {
      // La colonne existe, on peut l'utiliser
      query = 'SELECT *, pris_en_charge FROM chatbotacceuil ORDER BY created_at DESC';
    } else {
      // La colonne n'existe pas encore, on l'ajoute
      try {
        await pool.query('ALTER TABLE chatbotacceuil ADD COLUMN pris_en_charge BOOLEAN DEFAULT FALSE');
        console.log('Colonne pris_en_charge ajoutée avec succès');
      } catch (alterError) {
        console.error('Erreur lors de l\'ajout de la colonne:', alterError);
      }
      query = 'SELECT *, pris_en_charge FROM chatbotacceuil ORDER BY created_at DESC';
    }

    const [rows] = await pool.query(query);
    
    // S'assurer que tous les contacts ont le champ pris_en_charge
    const contactsWithStatus = rows.map(contact => ({
      ...contact,
      pris_en_charge: contact.pris_en_charge || false
    }));

    res.status(200).json(contactsWithStatus);
  } catch (error) {
    console.error('Erreur récupération contacts:', error);
    res.status(500).json({ message: 'Erreur serveur', error: error.message });
  }
} 