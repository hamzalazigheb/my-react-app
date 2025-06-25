-- Script pour ajouter la colonne pris_en_charge à la table chatbotacceuil
-- À exécuter dans phpMyAdmin ou via la ligne de commande MySQL

USE azalee_patrimoine;

-- Ajouter la colonne pris_en_charge avec une valeur par défaut false
ALTER TABLE chatbotacceuil 
ADD COLUMN pris_en_charge BOOLEAN DEFAULT FALSE;

-- Ajouter un index pour optimiser les requêtes de filtrage
CREATE INDEX idx_pris_en_charge ON chatbotacceuil(pris_en_charge);

-- Vérifier que la colonne a été ajoutée
DESCRIBE chatbotacceuil; 