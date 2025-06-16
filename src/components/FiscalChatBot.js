import React, { useState, useEffect } from 'react';
import './ChatBot.css';
import logo1 from '../assets/logo1.png';

const FiscalChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [userInfo, setUserInfo] = useState({
    name: '',
    situation: '',
    revenus: '',
    objectif: '',
    patrimoine: ''
  });
  const [messages, setMessages] = useState([
    { text: "Bonjour ! Je suis Sarah, votre assistante spécialisée en optimisation fiscale. Je vais vous aider à découvrir nos solutions. Puis-je avoir votre nom ?", sender: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isConversationComplete, setIsConversationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatBot(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const conversationSteps = [
    {
      question: "Quelle est votre situation familiale actuelle ?",
      field: 'situation',
      options: [
        "Célibataire",
        "Marié(e)",
        "Pacsé(e)",
        "Divorcé(e)",
        "Veuf/Veuve"
      ]
    },
    {
      question: "Quelle est votre tranche d'imposition approximative ?",
      field: 'revenus',
      options: [
        "Tranche 0-11%",
        "Tranche 11-30%",
        "Tranche 30-41%",
        "Tranche 41-45%",
        "Je préfère ne pas le dire"
      ]
    },
    {
      question: "Quel est votre objectif principal en termes d'optimisation fiscale ?",
      field: 'objectif',
      options: [
        "Réduire mon imposition",
        "Optimiser la transmission de mon patrimoine",
        "Investir dans l'immobilier",
        "Protéger mes actifs",
        "Autre"
      ]
    },
    {
      question: "Quel est votre patrimoine approximatif ?",
      field: 'patrimoine',
      options: [
        "Moins de 100 000€",
        "100 000€ - 500 000€",
        "500 000€ - 1 000 000€",
        "Plus de 1 000 000€",
        "Je préfère ne pas le dire"
      ]
    }
  ];

  const resetConversation = () => {
    setCurrentStep(0);
    setUserInfo({
      name: '',
      situation: '',
      revenus: '',
      objectif: '',
      patrimoine: ''
    });
    setMessages([
      { text: "Bonjour ! Je suis Sarah, votre assistante spécialisée en optimisation fiscale. Je vais vous aider à découvrir nos solutions. Puis-je avoir votre nom ?", sender: 'bot' }
    ]);
    setInputMessage('');
    setIsConversationComplete(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      // Add user message
      const userMessage = { text: inputMessage, sender: 'user' };
      setMessages(prev => [...prev, userMessage]);

      // Process the response based on current step
      if (currentStep === 0) {
        // Handle name input
        setUserInfo(prev => ({ ...prev, name: inputMessage }));
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: conversationSteps[0].question,
            sender: 'bot'
          }]);
        }, 1000);
        setCurrentStep(1);
      } else if (currentStep <= conversationSteps.length) {
        const step = conversationSteps[currentStep - 1];
        
        // Store the answer
        setUserInfo(prev => ({ ...prev, [step.field]: inputMessage }));

        // Send next question or conclude
        setTimeout(() => {
          if (currentStep < conversationSteps.length) {
            const nextQuestion = conversationSteps[currentStep];
            let botMessage = {
              text: nextQuestion.question,
              sender: 'bot'
            };
            
            // Add options if they exist
            if (nextQuestion.options) {
              botMessage.options = nextQuestion.options;
            }
            
            setMessages(prev => [...prev, botMessage]);
          } else {
            // Conclude conversation with tax-specific message
            setMessages(prev => [...prev, {
              text: `Merci ${userInfo.name} ! En fonction de votre profil, nos experts en optimisation fiscale pourront vous proposer des solutions adaptées à votre situation. Un conseiller spécialisé vous contactera prochainement pour discuter des opportunités d'optimisation fiscale qui correspondent à vos objectifs.`,
              sender: 'bot'
            }]);
            setIsConversationComplete(true);
          }
        }, 1000);
        
        setCurrentStep(currentStep + 1);
      }

      setInputMessage('');
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