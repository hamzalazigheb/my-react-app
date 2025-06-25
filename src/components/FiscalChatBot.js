import React, { useState, useEffect } from 'react';
import './ChatBot.css';
import logo1 from '../assets/logo1.png';

const FiscalChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [userInfo, setUserInfo] = useState({
    nom: '',
    prenom: '',
    age: '',
    situation: '',
    enfants: '',
    tmi: '',
    placements: '',
    contact: ''
  });
  const [messages, setMessages] = useState([
    {
      text: "Comment réduire mes impôts grâce à des investissements financiers ? Il existe de multiples moyens de réduire ses impôts mais cela dépend de combien de réduction on parle car les niches fiscales sont plafonnées. Toutefois, il existe des dispositifs malins à mettre en place mais qui dépendent de votre situation personnelle. Êtes-vous d'accord pour répondre à quelques questions sous couvert de la confidentialité ?",
      sender: 'bot',
      options: ["Oui", "Non"]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isConversationComplete, setIsConversationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatBot(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Les étapes de questions si l'utilisateur répond Oui
  const questionSteps = [
    { question: "Quel est votre nom ?", field: 'nom' },
    { question: "Quel est votre prénom ?", field: 'prenom' },
    { question: "Quel est votre âge ?", field: 'age', validation: (value) => !isNaN(value) && parseInt(value) > 0, errorMessage: "Veuillez entrer un âge valide (nombre supérieur à 0)." },
    { question: "Quelle est votre situation matrimoniale ?", field: 'situation', options: ["Marié(e)", "Pacsé(e)", "Célibataire"] },
    { question: "Avez-vous des enfants ?", field: 'enfants', options: ["Oui", "Non"] },
    { question: "Quel est votre TMI (Taux Marginal d'Imposition) ?", field: 'tmi', options: ["11%", "30%", "41%", "45%", "Je ne sais pas"] },
    { question: "Disposez-vous de placements financiers ou immobiliers ?", field: 'placements', options: ["Oui, financiers", "Oui, immobiliers", "Oui, les deux", "Non"] }
  ];

  const resetConversation = () => {
    setCurrentStep(0);
    setUserInfo({
      nom: '',
      prenom: '',
      age: '',
      situation: '',
      enfants: '',
      tmi: '',
      placements: '',
      contact: ''
    });
    setMessages([
      {
        text: "Comment réduire mes impôts grâce à des investissements financiers ? Il existe de multiples moyens de réduire ses impôts mais cela dépend de combien de réduction on parle car les niches fiscales sont plafonnées. Toutefois, il existe des dispositifs malins à mettre en place mais qui dépendent de votre situation personnelle. Êtes-vous d'accord pour répondre à quelques questions sous couvert de la confidentialité ?",
        sender: 'bot',
        options: ["Oui", "Non"]
      }
    ]);
    setInputMessage('');
    setIsConversationComplete(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    const userMessage = { text: inputMessage, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    // Step 0: Oui/Non
    if (currentStep === 0) {
      if (inputMessage === "Oui") {
        setTimeout(() => {
          setMessages(prev => [...prev, { text: questionSteps[0].question, sender: 'bot' }]);
        }, 800);
        setCurrentStep(1);
      } else if (inputMessage === "Non") {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: "Souhaitez-vous être contacté par un conseiller ou prendre rendez-vous directement ?",
            sender: 'bot',
            options: ["Être contacté par un conseiller", "Prendre rendez-vous directement"]
          }]);
        }, 800);
        setCurrentStep(100); // branche contact
      } else {
        setTimeout(() => {
          setMessages(prev => [...prev, { text: "Merci de répondre par Oui ou Non.", sender: 'bot', options: ["Oui", "Non"] }]);
        }, 800);
      }
      setInputMessage('');
      return;
    }

    // Questions personnalisées (si Oui)
    if (currentStep > 0 && currentStep <= questionSteps.length) {
      const stepIndex = currentStep - 1;
      const step = questionSteps[stepIndex];
      // Validation si présente
      if (step.validation && !step.validation(inputMessage)) {
        setTimeout(() => {
          setMessages(prev => [...prev, { text: step.errorMessage || "Réponse invalide, veuillez réessayer.", sender: 'bot' }]);
        }, 800);
        setInputMessage('');
        return;
      }
      setUserInfo(prev => ({ ...prev, [step.field]: inputMessage }));
      if (stepIndex < questionSteps.length - 1) {
        setTimeout(() => {
          const nextStep = questionSteps[stepIndex + 1];
          setMessages(prev => [...prev, {
            text: nextStep.question,
            sender: 'bot',
            options: nextStep.options
          }]);
        }, 800);
        setCurrentStep(currentStep + 1);
      } else {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: `Merci ${userInfo.prenom ? userInfo.prenom : ''} ! Un conseiller va étudier votre profil et vous contactera rapidement.`,
            sender: 'bot'
          }]);
        }, 800);
        saveToDatabase({ ...userInfo });
        setIsConversationComplete(true);
      }
      setInputMessage('');
      return;
    }

    // Branche contact (si Non)
    if (currentStep === 100) {
      setUserInfo(prev => ({ ...prev, contact: inputMessage }));
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "Merci ! Un conseiller va vous recontacter très prochainement.",
          sender: 'bot'
        }]);
      }, 800);
      saveToDatabase({ ...userInfo });
      setIsConversationComplete(true);
      setInputMessage('');
      return;
    }
  };

  // Fonction pour sauvegarder dans la base de données
  const saveToDatabase = async (data) => {
    try {
      const response = await fetch('/api/chatbot-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nom: data.nom || '',
          prenom: data.prenom || '',
          age: parseInt(data.age) || 0,
          situation_matrimoniale: data.situation || '',
          enfants: data.enfants || '',
          situation_professionnelle: 'Autre', // valeur par défaut valide pour l'ENUM
          tmi: data.tmi || '',
          placements_actuels: data.placements || '',
          budget_projet: '',
          intention: '',
          objectif: '',
          canal_preference: '',
          date_rdv: '',
          telephone: '',
          email: '',
          source: 'chatbot_fiscal'
        })
      });
      if (!response.ok) throw new Error('Erreur lors de la sauvegarde');
      const result = await response.json();
      console.log('FiscalChatBot data saved:', result);
      return result;
    } catch (error) {
      console.error('Erreur sauvegarde FiscalChatBot:', error);
      return null;
    }
  };

  return (
    <div className={`chatbot ${isOpen ? 'open' : ''} ${showChatBot ? 'visible' : ''}`}>
      <div className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comments'}`}></i>
      </div>
      
      <div className="chatbot-container">
        <div className="chatbot-header">
          <img src={logo1} alt="Azalée Patrimoine" className="chatbot-logo" />
          <h3>Assistant Optimisation Fiscale</h3>
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
          {isConversationComplete && (
            <div className="restart-conversation">
              <button onClick={resetConversation} className="restart-button">
                Commencer une nouvelle conversation
              </button>
            </div>
          )}
        </div>
        
        {!isConversationComplete && (
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
        )}
      </div>
    </div>
  );
};

export default FiscalChatBot; 