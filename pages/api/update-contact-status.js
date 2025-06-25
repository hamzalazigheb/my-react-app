import pool from '../../utils/db';

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { id, pris_en_charge } = req.body;

    console.log('Mise à jour du statut:', { id, pris_en_charge });

    // Validation des données
    if (!id || typeof pris_en_charge !== 'boolean') {
      return res.status(400).json({ 
        message: 'Données invalides',
        required: ['id', 'pris_en_charge'],
        received: { id, pris_en_charge, type: typeof pris_en_charge }
      });
    }

    // Vérifier si la colonne existe
    const [columns] = await pool.query(`
      SELECT COLUMN_NAME 
      FROM INFORMATION_SCHEMA.COLUMNS 
      WHERE TABLE_SCHEMA = 'azalee_patrimoine' 
      AND TABLE_NAME = 'chatbotacceuil' 
      AND COLUMN_NAME = 'pris_en_charge'
    `);

    if (columns.length === 0) {
      // Ajouter la colonne si elle n'existe pas
      await pool.query('ALTER TABLE chatbotacceuil ADD COLUMN pris_en_charge BOOLEAN DEFAULT FALSE');
      console.log('Colonne pris_en_charge ajoutée automatiquement');
    }

    // Mettre à jour le statut dans la base de données
    const [result] = await pool.query(
      `UPDATE chatbotacceuil 
       SET pris_en_charge = ?, updatedAt = NOW() 
       WHERE id = ?`,
      [pris_en_charge, id]
    );

    console.log('Résultat de la mise à jour:', result);

    if (result.affectedRows === 0) {
      return res.status(404).json({ 
        message: 'Contact non trouvé',
        id: id
      });
    }

    res.status(200).json({ 
      message: 'Statut mis à jour avec succès',
      id: id,
      pris_en_charge: pris_en_charge,
      affectedRows: result.affectedRows
    });

  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      message: 'Erreur lors de la mise à jour du statut',
      error: error.message,
      stack: error.stack
    });
  }
} 