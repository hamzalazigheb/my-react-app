import React, { useState } from 'react';
import './ChatBot.css';
import logo1 from '../assets/logo1.png';

const FiscalChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [userInfo, setUserInfo] = useState({
    name: '',
    situation: '',
    income: '',
    propertyOwner: '',
    investments: '',
    children: '',
    goals: []
  });
  const [messages, setMessages] = useState([
    { 
      text: "Bonjour ! Je suis Claire, votre experte en optimisation fiscale. Je vais vous aider à identifier les meilleures solutions pour votre situation. Pour commencer, quel est votre nom ?",
      sender: 'bot'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const conversationSteps = [
    {
      question: "Merci ! Quelle est votre situation professionnelle ?",
      field: 'situation',
      options: [
        "Salarié",
        "Chef d'entreprise",
        "Profession libérale",
        "Retraité",
        "Autre"
      ]
    },
    {
      question: "Dans quelle tranche de revenus annuels vous situez-vous ?",
      field: 'income',
      options: [
        "Moins de 30 000€",
        "30 000€ - 50 000€",
        "50 000€ - 100 000€",
        "100 000€ - 150 000€",
        "Plus de 150 000€"
      ]
    },
    {
      question: "Êtes-vous propriétaire de biens immobiliers ?",
      field: 'propertyOwner',
      options: [
        "Oui, ma résidence principale",
        "Oui, des biens locatifs",
        "Oui, les deux",
        "Non"
      ]
    },
    {
      question: "Avez-vous déjà des investissements ?",
      field: 'investments',
      options: [
        "Assurance-vie",
        "PEA",
        "SCPI",
        "Investissements locatifs",
        "Aucun pour le moment"
      ]
    },
    {
      question: "Avez-vous des enfants ?",
      field: 'children',
      options: [
        "Non",
        "1 enfant",
        "2 enfants",
        "3 enfants ou plus"
      ]
    },
    {
      question: "Quels sont vos objectifs principaux en matière d'optimisation fiscale ? (Plusieurs choix possibles)",
      field: 'goals',
      options: [
        "Réduire mon impôt sur le revenu",
        "Optimiser la transmission de mon patrimoine",
        "Défiscaliser via l'immobilier",
        "Préparer ma retraite",
        "Protéger ma famille"
      ],
      multiple: true
    }
  ];

  const getFiscalRecommendations = (info) => {
    let recommendations = [];

    // Based on income
    if (parseInt(info.income) > 100000) {
      recommendations.push("Compte tenu de vos revenus élevés, nous recommandons une stratégie de défiscalisation immobilière (PINEL, LMNP) combinée à des placements en assurance-vie.");
    }

    // Based on property ownership
    if (info.propertyOwner.includes("locatifs")) {
      recommendations.push("En tant que propriétaire de biens locatifs, nous pouvons optimiser votre fiscalité immobilière et étudier les opportunités de réduction d'impôts via des travaux de rénovation.");
    }

    // Based on children
    if (info.children !== "Non") {
      recommendations.push("La présence d'enfants ouvre droit à des avantages fiscaux spécifiques. Nous pouvons explorer les solutions d'épargne études et de transmission patrimoniale.");
    }

    // Based on professional situation
    if (info.situation === "Chef d'entreprise" || info.situation === "Profession libérale") {
      recommendations.push("Votre statut professionnel permet d'accéder à des solutions spécifiques comme l'épargne retraite Madelin ou la création de société civile.");
    }

    return recommendations;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim() || e.target === null) {
      const message = e.target === null ? inputMessage : inputMessage.trim();
      
      // Add user message
      const userMessage = { text: message, sender: 'user' };
      setMessages(prev => [...prev, userMessage]);

      // Process the response based on current step
      if (currentStep === 0) {
        // Handle name input
        setUserInfo(prev => ({ ...prev, name: message }));
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: conversationSteps[0].question,
            sender: 'bot',
            options: conversationSteps[0].options
          }]);
        }, 1000);
        setCurrentStep(1);
      } else if (currentStep <= conversationSteps.length) {
        const step = conversationSteps[currentStep - 1];
        
        // Store the answer
        if (step.multiple) {
          setUserInfo(prev => ({
            ...prev,
            [step.field]: [...(prev[step.field] || []), message]
          }));
        } else {
          setUserInfo(prev => ({ ...prev, [step.field]: message }));
        }

        // Send next question or conclude
        setTimeout(() => {
          if (currentStep < conversationSteps.length) {
            const nextQuestion = conversationSteps[currentStep];
            setMessages(prev => [...prev, {
              text: nextQuestion.question,
              sender: 'bot',
              options: nextQuestion.options,
              multiple: nextQuestion.multiple
            }]);
          } else {
            // Generate recommendations
            const recommendations = getFiscalRecommendations(userInfo);
            
            // Send conclusion messages
            setMessages(prev => [
              ...prev,
              {
                text: `Merci pour ces informations, ${userInfo.name}. Voici nos recommandations personnalisées :`,
                sender: 'bot'
              },
              ...recommendations.map(rec => ({
                text: rec,
                sender: 'bot'
              })),
              {
                text: "Un de nos experts en optimisation fiscale vous contactera dans les 24h pour approfondir ces pistes et élaborer votre stratégie personnalisée.",
                sender: 'bot'
              }
            ]);
          }
        }, 1000);
        
        setCurrentStep(currentStep + 1);
      }

      setInputMessage('');
    }
  };

  return (
    <div className={`chatbot ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comments'}`}></i>
      </div>
      
      <div className="chatbot-container">
        <div className="chatbot-header">
          <img src={logo1} alt="Azalée Patrimoine" className="chatbot-logo" />
          <h3>Expert Fiscal Azalée</h3>
        </div>
        
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
              {message.options && (
                <div className="message-options">
                  {message.options.map((option, optIndex) => (
                    <button
                      key={optIndex}
                      onClick={() => {
                        setInputMessage(option);
                        handleSubmit({ preventDefault: () => {}, target: null });
                      }}
                      className="option-button"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSubmit} className="chatbot-input">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Écrivez votre message..."
          />
          <button type="submit">
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default FiscalChatBot; 