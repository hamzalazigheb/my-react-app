import React, { useState } from 'react';
import './AuditPatrimonial.css';

const AuditPatrimonial = () => {
  const [formData, setFormData] = useState({
    nom: '',
    dateNaissance: '',
    situationFamiliale: '',
    profession: '',
    revenus: '',
    patrimoineImmobilier: '',
    patrimoineFinancier: '',
    credits: '',
    assurances: '',
    objectifs: [],
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        objectifs: checked 
          ? [...prev.objectifs, value]
          : prev.objectifs.filter(obj => obj !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="audit-patrimonial">
      <div className="audit-header">
        <h1>Audit patrimonial</h1>
        <h2>La première étape pour piloter votre avenir</h2>
        <p>
          Chez Azalée Patrimoine, nous sommes convaincus qu'on ne peut pas bâtir une stratégie efficace 
          sans une connaissance fine et personnalisée de votre situation. C'est pourquoi tout commence 
          par un audit patrimonial complet : un diagnostic structuré qui permet d'établir une vue 
          d'ensemble claire et objective de votre patrimoine.
        </p>
      </div>

      <div className="audit-advantage">
        <h2>Offrez vous l'avantage qui fait la différence !</h2>
        <p>
          Chaque patrimoine est unique en volume et en valeur. Chaque patrimoine est amené à évoluer 
          à la hausse ou à la baisse. C'est la raison pour laquelle il est essentiel de répertorier 
          tous les éléments de votre patrimoine (financiers/immobiliers/professionnels), vos crédits 
          ou dettes, ainsi que votre situation personnelle (marié/célibataire/Veuf ou divorcé) et 
          professionnelle (salarié/indépendant) car tous ces éléments ont un impact sur la manière 
          d'atteindre votre objectif patrimonial.
        </p>
        <p>
          A partir de cet audit, nous déterminons avec précisions vos objectifs et nous mettons en 
          place une chronologie des actions à réaliser pour atteindre vos objectifs.
        </p>
      </div>

      <div className="audit-components">
        <h2>🧩 Les composantes clés d'un audit patrimonial</h2>
        <div className="component-grid">
          <div className="component-card">
            <h3>Votre situation civile et familiale</h3>
            <p>Célibataire, marié, pacsé, divorcé, veuf ? Chaque situation a des implications patrimoniales spécifiques. Nous analysons :</p>
            <ul>
              <li>Votre régime matrimonial (communauté, séparation de biens…)</li>
              <li>La présence d'enfants (du couple ou issus d'une précédente union)</li>
              <li>Les clauses de succession ou d'assurance-vie déjà en place</li>
            </ul>
            <p className="objective">🎯 Objectif : protéger les personnes importantes pour vous tout en optimisant la fiscalité familiale.</p>
          </div>

          <div className="component-card">
            <h3>Votre profil professionnel et vos revenus</h3>
            <p>Analyse de votre situation professionnelle et de vos sources de revenus.</p>
          </div>

          <div className="component-card">
            <h3>Votre patrimoine immobilier et financier</h3>
            <p>Évaluation complète de vos actifs immobiliers et financiers.</p>
          </div>

          <div className="component-card">
            <h3>Vos engagements financiers</h3>
            <p>Analyse de vos dettes et obligations financières.</p>
          </div>

          <div className="component-card">
            <h3>Votre couverture assurantielle</h3>
            <p>Évaluation de vos protections et assurances en place.</p>
          </div>
        </div>
      </div>

      <div className="audit-why">
        <h2>🎯 Pourquoi réaliser un audit patrimonial ?</h2>
        <p>Un audit patrimonial n'est pas réservé aux très gros patrimoines. Il s'adresse à toute personne souhaitant prendre des décisions éclairées. C'est un outil :</p>
        <ul>
          <li>de diagnostic</li>
          <li>de prévention</li>
          <li>de stratégie sur-mesure</li>
        </ul>
        <p>Et c'est surtout le point de départ d'un accompagnement serein et durable avec un conseiller Azalée.</p>
      </div>

      <div className="audit-form">
        <h2>Comment réaliser un audit patrimonial ?</h2>
        <h3>📝 Recueil d'informations patrimoniales</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nom">Nom / Prénom :</label>
            <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="dateNaissance">Date de naissance :</label>
            <input type="date" id="dateNaissance" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="situationFamiliale">Situation familiale :</label>
            <select id="situationFamiliale" name="situationFamiliale" value={formData.situationFamiliale} onChange={handleChange} required>
              <option value="">— Choisir —</option>
              <option value="celibataire">Célibataire</option>
              <option value="marie">Marié(e)</option>
              <option value="pacs">PACS</option>
              <option value="divorce">Divorcé(e)</option>
              <option value="veuf">Veuf(ve)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="profession">Profession :</label>
            <input type="text" id="profession" name="profession" value={formData.profession} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="revenus">Revenus mensuels nets :</label>
            <input type="number" id="revenus" name="revenus" value={formData.revenus} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="patrimoineImmobilier">Patrimoine immobilier détenu :</label>
            <textarea id="patrimoineImmobilier" name="patrimoineImmobilier" value={formData.patrimoineImmobilier} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="patrimoineFinancier">Patrimoine financier (assurance-vie, PER, PEA, etc.) :</label>
            <textarea id="patrimoineFinancier" name="patrimoineFinancier" value={formData.patrimoineFinancier} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="credits">Crédits ou dettes en cours :</label>
            <textarea id="credits" name="credits" value={formData.credits} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="assurances">Assurances en place (décès, invalidité, prévoyance…) :</label>
            <textarea id="assurances" name="assurances" value={formData.assurances} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Objectifs patrimoniaux :</label>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" name="objectifs" value="optimiser" onChange={handleChange} />
                Optimiser ma fiscalité
              </label>
              <label>
                <input type="checkbox" name="objectifs" value="retraite" onChange={handleChange} />
                Préparer ma retraite
              </label>
              <label>
                <input type="checkbox" name="objectifs" value="immobilier" onChange={handleChange} />
                Projet immobilier
              </label>
              <label>
                <input type="checkbox" name="objectifs" value="revenus" onChange={handleChange} />
                Revenus complémentaires
              </label>
              <label>
                <input type="checkbox" name="objectifs" value="transmission" onChange={handleChange} />
                Organiser ma transmission
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <button type="submit" className="submit-button">Envoyer mon profil</button>
        </form>
      </div>

      <div className="audit-cta">
        <h2>📞 Faites le point gratuitement avec un expert Azalée</h2>
        <p>
          Vous souhaitez faire un bilan de votre patrimoine ?<br />
          Vous avez des doutes sur vos placements, votre régime matrimonial ou votre niveau de couverture ?
        </p>
        <p>
          Prenez rendez-vous pour un audit patrimonial confidentiel, sans engagement.<br />
          En 45 minutes, vous repartez avec une vision claire et structurée.
        </p>
        <blockquote>
          "Un patrimoine bien géré commence par une analyse honnête et professionnelle."
        </blockquote>
        <button className="cta-button">Prenez rendez-vous dès maintenant</button>
      </div>
    </div>
  );
};

export default AuditPatrimonial; 