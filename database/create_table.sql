-- Create table for SARA chatbot data
CREATE TABLE IF NOT EXISTS chatbotacceuil (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  prenom VARCHAR(255) NOT NULL,
  age INT NOT NULL,
  situation_matrimoniale ENUM('Marié(e)', 'Pacsé(e)', 'Célibataire') NOT NULL,
  enfants ENUM('Oui', 'Non') NOT NULL,
  situation_professionnelle ENUM('Salarié', 'Entrepreneur', 'Retraité', 'Profession libérale', 'Autre') NOT NULL,
  tmi VARCHAR(50) NOT NULL,
  placements_actuels TEXT,
  budget_projet VARCHAR(100),
  intention VARCHAR(255),
  objectif VARCHAR(255),
  canal_preference VARCHAR(50),
  date_rdv VARCHAR(100),
  telephone VARCHAR(50),
  email VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
); 