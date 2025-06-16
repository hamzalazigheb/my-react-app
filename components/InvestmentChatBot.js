import { useState, useEffect } from 'react';
import Image from 'next/image';
import { store } from '../utils/store';
import logoAzalee from '../src/assets/logo1.png'; // Import the logo directly

export default function InvestmentChatBot() {
  // États pour gérer l'interface du chatbot
  const [isOpen, setIsOpen] = useState(false); // Contrôle l'ouverture/fermeture
  const [showChatBot, setShowChatBot] = useState(false); // Contrôle l'affichage initial
  const [currentStep, setCurrentStep] = useState(0); // Suit l'étape actuelle de la conversation
  
  // État pour stocker les informations de l'utilisateur
  const [userInfo, setUserInfo] = useState({
    nom: '',
    age: '',
    email: '',
    investmentGoal: '',
    budget: ''
  });
  
  // État pour gérer l'historique des messages
  const [messages, setMessages] = useState([
    { text: "Bonjour ! Je suis Sarah, votre assistante spécialisée en investissement. Je vais vous aider à découvrir nos solutions. Puis-je avoir votre nom ?", sender: 'bot' }
  ]);
  
  // États pour gérer l'input et l'état de la conversation
  const [inputMessage, setInputMessage] = useState('');
  const [isConversationComplete, setIsConversationComplete] = useState(false);

  // Effet pour afficher le chatbot après un délai
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatBot(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Configuration des étapes de la conversation
  const conversationSteps = [
    {
      question: "Quel âge avez-vous ?",
      field: 'age',
      validation: (value) => !isNaN(value) && value > 0 && value < 120
    },
    {
      question: "Quelle est votre adresse e-mail ?",
      field: 'email',
      validation: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    },
    {
      question: "Quel est votre objectif d'investissement principal ?",
      field: 'investmentGoal',
      options: [
        "Préparation retraite",
        "Investissement immobilier",
        "Optimisation fiscale",
        "Protection familiale",
        "Autre"
      ]
    },
    {
      question: "Quel est votre budget d'investissement approximatif ?",
      field: 'budget',
      options: [
        "Moins de 50 000 €",
        "50 000 € - 100 000 €",
        "100 000 € - 250 000 €",
        "250 000 € - 500 000 €",
        "Plus de 500 000 €"
      ]
    }
  ];

  // Fonction pour réinitialiser la conversation
  const resetConversation = () => {
    setCurrentStep(0);
    setUserInfo({
      nom: '',
      age: '',
      email: '',
      investmentGoal: '',
      budget: ''
    });
    setMessages([
      { text: "Bonjour ! Je suis Sarah, votre assistante spécialisée en investissement. Je vais vous aider à découvrir nos solutions. Puis-je avoir votre nom ?", sender: 'bot' }
    ]);
    setInputMessage('');
    setIsConversationComplete(false);
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      // Ajout du message de l'utilisateur
      const userMessage = { text: inputMessage, sender: 'user' };
      setMessages(prev => [...prev, userMessage]);

      // Traitement de la réponse selon l'étape actuelle
      if (currentStep === 0) {
        // Gestion du nom
        setUserInfo(prev => ({ ...prev, nom: inputMessage }));
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: conversationSteps[0].question,
            sender: 'bot'
          }]);
        }, 1000);
        setCurrentStep(1);
      } else if (currentStep <= conversationSteps.length) {
        const step = conversationSteps[currentStep - 1];
        let isValid = true;
        
        // Validation de l'entrée si une validation existe
        if (step.validation) {
          isValid = step.validation(inputMessage);
        }

        if (isValid) {
          // Stockage de la réponse
          setUserInfo(prev => ({ ...prev, [step.field]: inputMessage }));

          // Envoi de la prochaine question ou conclusion
          setTimeout(() => {
            if (currentStep < conversationSteps.length) {
              const nextQuestion = conversationSteps[currentStep];
              let botMessage = {
                text: nextQuestion.question,
                sender: 'bot'
              };
              
              // Ajout des options si elles existent
              if (nextQuestion.options) {
                botMessage.options = nextQuestion.options;
              }
              
              setMessages(prev => [...prev, botMessage]);
            } else {
              // Sauvegarder les données dans le store
              store.addContact({
                ...userInfo,
                investmentGoal: userInfo.investmentGoal,
                budget: userInfo.budget
              }, 'investment');

              // Conclusion de la conversation
              setMessages(prev => [...prev, {
                text: `Merci ${userInfo.nom} ! En fonction de votre profil d'investisseur, nos experts pourront vous proposer des solutions adaptées à vos objectifs. Un conseiller spécialisé vous contactera prochainement pour discuter des opportunités d'investissement qui correspondent à votre profil.`,
                sender: 'bot'
              }]);
              // Ajout des options de contact
              setTimeout(() => {
                setMessages(prev => [...prev, {
                  text: "Que souhaitez-vous faire maintenant ?",
                  sender: 'bot',
                  options: [
                    "Prendre rendez-vous",
                    "Nous contacter"
                  ]
                }]);
              }, 1000);
              setIsConversationComplete(true);
            }
          }, 1000);
          
          setCurrentStep(currentStep + 1);
        } else {
          // Gestion des entrées invalides
          setTimeout(() => {
            setMessages(prev => [...prev, {
              text: "Je suis désolée, cette réponse n'est pas valide. Pourriez-vous réessayer ?",
              sender: 'bot'
            }]);
          }, 1000);
        }
      } else if (isConversationComplete) {
        // Gestion des options de contact
        if (inputMessage === "Prendre rendez-vous") {
          setMessages(prev => [...prev, {
            text: "Je vous redirige vers notre formulaire de rendez-vous...",
            sender: 'bot'
          }]);
          // Redirection vers la page de rendez-vous
          setTimeout(() => {
            window.location.href = '/prendrerendevous';
          }, 1500);
        } else if (inputMessage === "Nous contacter") {
          setMessages(prev => [...prev, {
            text: "Pour nous contacter, vous pouvez nous appeler au 01 23 45 67 89 ou envoyer un email à contact@azalee.fr",
            sender: 'bot'
          }]);
        }
      }

      setInputMessage('');
    }
  };

  return (
    // Conteneur principal du chatbot
    <div className={`chatbot ${isOpen ? 'open' : ''} ${showChatBot ? 'visible' : ''}`}>
      {/* Bouton de basculement avec logo */}
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
      
      {/* Conteneur du chatbot */}
      <div className="chatbot-container">
        {/* En-tête du chatbot */}
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
            <h3>Azalée Patrimoine</h3>
            <p>Assistant Investissement</p>
          </div>
        </div>
        
        {/* Zone des messages */}
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
              {/* Affichage des options si présentes */}
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
          {/* Bouton de redémarrage de la conversation */}
          {isConversationComplete && (
            <div className="restart-conversation">
              <button onClick={resetConversation} className="restart-button">
                Commencer une nouvelle conversation
              </button>
            </div>
          )}
        </div>
        
        {/* Formulaire de saisie */}
        <form onSubmit={handleSubmit} className="chatbot-input">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Écrivez votre message..."
          />
          <button type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
} 