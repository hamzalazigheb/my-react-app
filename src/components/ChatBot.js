import React, { useState } from 'react';
import './ChatBot.css';
import logo1 from '../assets/logo1.png';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [userInfo, setUserInfo] = useState({
    name: '',
    age: '',
    email: '',
    investmentGoal: '',
    budget: ''
  });
  const [messages, setMessages] = useState([
    { text: "Bonjour ! Je suis Sarah, votre assistante virtuelle Azalée. Je vais vous aider à découvrir nos services. Puis-je avoir votre nom ?", sender: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const conversationSteps = [
    {
      question: "Ravi de vous rencontrer ! Quel âge avez-vous ?",
      field: 'age',
      validation: (value) => !isNaN(value) && value > 0 && value < 120
    },
    {
      question: "Merci. Quelle est votre adresse e-mail ?",
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
        let isValid = true;
        
        // Validate input if validation exists
        if (step.validation) {
          isValid = step.validation(inputMessage);
        }

        if (isValid) {
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
              // Conclude conversation
              setMessages(prev => [...prev, {
                text: `Merci ${userInfo.name} ! Un de nos conseillers va étudier votre profil et vous contactera rapidement à l'adresse ${userInfo.email}. En attendant, n'hésitez pas à explorer notre site pour découvrir nos services.`,
                sender: 'bot'
              }]);
            }
          }, 1000);
          
          setCurrentStep(currentStep + 1);
        } else {
          // Handle invalid input
          setTimeout(() => {
            setMessages(prev => [...prev, {
              text: "Je suis désolée, cette réponse n'est pas valide. Pourriez-vous réessayer ?",
              sender: 'bot'
            }]);
          }, 1000);
        }
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
          <h3>Assistance Azalée</h3>
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

export default ChatBot; 