import pool from '../../utils/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const {
      nom,
      prenom,
      age,
      situation_matrimoniale,
      enfants,
      situation_professionnelle,
      tmi,
      placements_actuels,
      budget_projet,
      intention,
      objectif,
      canal_preference,
      date_rdv,
      telephone,
      email
    } = req.body;

    // Validate required fields
    if (!nom || !prenom || !age || !situation_matrimoniale || !enfants || !situation_professionnelle || !tmi) {
      return res.status(400).json({ 
        message: 'Missing required fields',
        required: ['nom', 'prenom', 'age', 'situation_matrimoniale', 'enfants', 'situation_professionnelle', 'tmi']
      });
    }

    // Insert data into database
    const [result] = await pool.query(
      `INSERT INTO chatbotacceuil (
        nom, prenom, age, situation_matrimoniale, enfants, 
        situation_professionnelle, tmi, placements_actuels, budget_projet,
        intention, objectif, canal_preference, date_rdv, telephone, email
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        nom,
        prenom,
        age,
        situation_matrimoniale,
        enfants,
        situation_professionnelle,
        tmi,
        placements_actuels || null,
        budget_projet || null,
        intention || null,
        objectif || null,
        canal_preference || null,
        date_rdv || null,
        telephone || null,
        email || null
      ]
    );

    res.status(201).json({ 
      message: 'Chatbot data saved successfully',
      id: result.insertId
    });

  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ 
      message: 'Error saving chatbot data',
      error: error.message 
    });
  }
} 