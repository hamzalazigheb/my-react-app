import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import logoAzalee from '../assets/logo1.png';
import './ChatBot.css';

const TransmissionChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [userInfo, setUserInfo] = useState({
    nom: '',
    prenom: '',
    age: '',
    situation_matrimoniale: '',
    enfants: '',
    tmi: '',
    placements_fi_immo: '',
    contact: ''
  });
  const [messages, setMessages] = useState([
    {
      text: "Comment transmettre mon patrimoine à mes enfants de manière optimale ? L'optimisation de votre transmission dépend de multiples critères. Êtes-vous d'accord pour répondre à quelques questions sous couvert de la confidentialité ?",
      sender: 'bot',
      options: ["Oui", "Non"]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isConversationComplete, setIsConversationComplete] = useState(false);
  const [error, setError] = useState(null);
  const [isAutoMode, setIsAutoMode] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatBot(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const questionSteps = [
    { question: "Quel est votre nom ?", field: 'nom' },
    { question: "Quel est votre prénom ?", field: 'prenom' },
    { question: "Quel est votre âge ?", field: 'age', validation: (value) => !isNaN(value) && parseInt(value) > 0, errorMessage: "Veuillez entrer un âge valide (nombre supérieur à 0)." },
    { question: "Quelle est votre situation matrimoniale ?", field: 'situation_matrimoniale', options: ["Marié(e)", "Pacsé(e)", "Célibataire", "Divorcé(e)", "Veuf/Veuve"] },
    { question: "Avez-vous des enfants ?", field: 'enfants', options: ["Oui", "Non"] },
    { question: "Quel est votre TMI (Taux Marginal d'Imposition) ?", field: 'tmi', options: ["11%", "30%", "41%", "45%", "Je ne sais pas"] },
    { question: "Disposez-vous de placements financiers ou immobiliers ?", field: 'placements_fi_immo', options: ["Oui, financiers", "Oui, immobiliers", "Oui, les deux", "Non"] }
  ];

  const resetConversation = () => {
    setCurrentStep(0);
    setUserInfo({
      nom: '',
      prenom: '',
      age: '',
      situation_matrimoniale: '',
      enfants: '',
      tmi: '',
      placements_fi_immo: '',
      contact: ''
    });
    setMessages([
      {
        text: "Comment transmettre mon patrimoine à mes enfants de manière optimale ? L'optimisation de votre transmission dépend de multiples critères. Êtes-vous d'accord pour répondre à quelques questions sous couvert de la confidentialité ?",
        sender: 'bot',
        options: ["Oui", "Non"]
      }
    ]);
    setInputMessage('');
    setIsConversationComplete(false);
    setError(null);
    setIsAutoMode(false);
  };

  // Mode automatique - déroule toutes les questions
  const startAutoMode = () => {
    setIsAutoMode(true);
    
    // Réponse automatique "Oui"
    setTimeout(() => {
      const userMessage = { text: "Oui", sender: 'user' };
      setMessages(prev => [...prev, userMessage]);
      
      // Commencer les questions automatiquement
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: questionSteps[0].question,
          sender: 'bot'
        }]);
        setCurrentStep(1);
        
        // Dérouler automatiquement toutes les questions
        autoPlayQuestions();
      }, 1000);
    }, 1000);
  };

  const autoPlayQuestions = () => {
    let stepIndex = 0;
    
    const playNextQuestion = () => {
      if (stepIndex >= questionSteps.length) {
        // Fin des questions
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: `Merci ! Un conseiller va étudier votre profil et vous contactera rapidement.`,
            sender: 'bot'
          }]);
          saveToDatabase({ ...userInfo });
          setIsConversationComplete(true);
        }, 1000);
        return;
      }

      const step = questionSteps[stepIndex];
      
      // Réponse automatique basée sur le type de question
      let autoResponse = "";
      if (step.field === 'nom') autoResponse = "Dupont";
      else if (step.field === 'prenom') autoResponse = "Jean";
      else if (step.field === 'age') autoResponse = "45";
      else if (step.field === 'situation_matrimoniale') autoResponse = "Marié(e)";
      else if (step.field === 'enfants') autoResponse = "Oui";
      else if (step.field === 'tmi') autoResponse = "30%";
      else if (step.field === 'placements_fi_immo') autoResponse = "Oui, les deux";

      // Afficher la réponse utilisateur
      setTimeout(() => {
        const userMessage = { text: autoResponse, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setUserInfo(prev => ({ ...prev, [step.field]: autoResponse }));

        // Passer à la question suivante
        setTimeout(() => {
          stepIndex++;
          if (stepIndex < questionSteps.length) {
            const nextStep = questionSteps[stepIndex];
            setMessages(prev => [...prev, {
              text: nextStep.question,
              sender: 'bot',
              options: nextStep.options
            }]);
            setCurrentStep(stepIndex + 1);
            playNextQuestion();
          } else {
            // Dernière question
            setTimeout(() => {
              const lastResponse = "Oui, les deux";
              const lastUserMessage = { text: lastResponse, sender: 'user' };
              setMessages(prev => [...prev, lastUserMessage]);
              setUserInfo(prev => ({ ...prev, [questionSteps[questionSteps.length - 1].field]: lastResponse }));
              
              setTimeout(() => {
                setMessages(prev => [...prev, {
                  text: `Merci ! Un conseiller va étudier votre profil et vous contactera rapidement.`,
                  sender: 'bot'
                }]);
                saveToDatabase({ ...userInfo });
                setIsConversationComplete(true);
              }, 1000);
            }, 1000);
          }
        }, 1000);
      }, 1000);
    };

    playNextQuestion();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = { text: inputMessage, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    // Première question (Oui/Non)
    if (currentStep === 0) {
      if (inputMessage.toLowerCase() === 'oui') {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: questionSteps[0].question,
            sender: 'bot'
          }]);
        }, 800);
        setCurrentStep(1);
      } else {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: "Souhaitez-vous être contacté par un conseiller ou prendre rendez-vous directement ?",
            sender: 'bot',
            options: ["Être contacté par un conseiller", "Prendre rendez-vous directement"]
          }]);
        }, 800);
        setCurrentStep(100);
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
        // Afficher automatiquement la question suivante avec ses options
        setTimeout(() => {
          const nextStep = questionSteps[stepIndex + 1];
          const nextMessage = {
            text: nextStep.question,
            sender: 'bot'
          };
          
          // Ajouter les options si elles existent
          if (nextStep.options) {
            nextMessage.options = nextStep.options;
          }
          
          setMessages(prev => [...prev, nextMessage]);
        }, 800);
        setCurrentStep(currentStep + 1);
      } else {
        // Dernière question - conclure
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

  // Fonction pour gérer les clics sur les boutons d'options
  const handleOptionClick = (option) => {
    if (isAutoMode) return; // Ignorer les clics en mode auto
    
    // Ajouter immédiatement le message utilisateur
    const userMessage = { text: option, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    
    // Traiter la réponse
    const messageToProcess = option;
    setInputMessage('');
    
    // Première question (Oui/Non)
    if (currentStep === 0) {
      if (option.toLowerCase() === 'oui') {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: questionSteps[0].question,
            sender: 'bot'
          }]);
        }, 800);
        setCurrentStep(1);
      } else {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: "Souhaitez-vous être contacté par un conseiller ou prendre rendez-vous directement ?",
            sender: 'bot',
            options: ["Être contacté par un conseiller", "Prendre rendez-vous directement"]
          }]);
        }, 800);
        setCurrentStep(100);
      }
      return;
    }

    // Questions personnalisées (si Oui)
    if (currentStep > 0 && currentStep <= questionSteps.length) {
      const stepIndex = currentStep - 1;
      const step = questionSteps[stepIndex];
      
      setUserInfo(prev => ({ ...prev, [step.field]: option }));
      
      if (stepIndex < questionSteps.length - 1) {
        // Afficher automatiquement la question suivante avec ses options
        setTimeout(() => {
          const nextStep = questionSteps[stepIndex + 1];
          const nextMessage = {
            text: nextStep.question,
            sender: 'bot'
          };
          
          // Ajouter les options si elles existent
          if (nextStep.options) {
            nextMessage.options = nextStep.options;
          }
          
          setMessages(prev => [...prev, nextMessage]);
        }, 800);
        setCurrentStep(currentStep + 1);
      } else {
        // Dernière question - conclure
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: `Merci ${userInfo.prenom ? userInfo.prenom : ''} ! Un conseiller va étudier votre profil et vous contactera rapidement.`,
            sender: 'bot'
          }]);
        }, 800);
        saveToDatabase({ ...userInfo });
        setIsConversationComplete(true);
      }
      return;
    }

    // Branche contact (si Non)
    if (currentStep === 100) {
      setUserInfo(prev => ({ ...prev, contact: option }));
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "Merci ! Un conseiller va vous recontacter très prochainement.",
          sender: 'bot'
        }]);
      }, 800);
      saveToDatabase({ ...userInfo });
      setIsConversationComplete(true);
      return;
    }
  };

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
          situation_matrimoniale: data.situation_matrimoniale || '',
          enfants: data.enfants || '',
          situation_professionnelle: 'Autre',
          tmi: data.tmi || '',
          placements_actuels: data.placements_fi_immo || '',
          budget_projet: '',
          intention: '',
          objectif: '',
          canal_preference: '',
          date_rdv: '',
          telephone: '',
          email: '',
          source: 'chatbot_transmission'
        })
      });
      if (!response.ok) throw new Error('Erreur lors de la sauvegarde');
      const result = await response.json();
      console.log('TransmissionChatBot data saved:', result);
      return result;
    } catch (err) {
      setError('Erreur lors de la sauvegarde');
      console.error(err);
    }
  };

  return (
    <div className={`chatbot ${isOpen ? 'open' : ''} ${showChatBot ? 'visible' : ''}`}>
      <div className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        <Image
          src={logoAzalee}
          alt="Azalée Patrimoine"
          width={50}
          height={50}
          className="chatbot-logo"
          priority
        />
      </div>
      
      <div className="chatbot-container">
        <div className="chatbot-header">
          <Image
            src={logoAzalee}
            alt="Azalée Patrimoine"
            width={50}
            height={50}
            className="chatbot-logo"
            priority
          />
          <div className="chatbot-header-text">
            <h3>Assistant Transmission</h3>
            <p>Optimisez votre patrimoine</p>
          </div>
        </div>
        
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
              {message.options && !isAutoMode && (
                <div className="message-options">
                  {message.options.map((option, optIndex) => (
                    <button
                      key={optIndex}
                      onClick={() => handleOptionClick(option)}
                      className="option-button"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {!isAutoMode && currentStep === 0 && (
            <div className="auto-mode-button">
              <button onClick={startAutoMode} className="auto-button">
                🚀 Déroulement automatique
              </button>
            </div>
          )}
          {isConversationComplete && (
            <div className="restart-conversation">
              <button onClick={resetConversation} className="restart-button">
                Commencer une nouvelle conversation
              </button>
            </div>
          )}
        </div>
        
        <form onSubmit={handleSubmit} className="chatbot-input">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Écrivez votre message..."
            disabled={isConversationComplete || isAutoMode}
          />
          <button type="submit" disabled={isConversationComplete || isAutoMode}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
      <div ref={messagesEndRef} />
    </div>
  );
};

export default TransmissionChatBot; 