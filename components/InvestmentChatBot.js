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
    prenom: '',
    age: '',
    situationFamiliale: '',
    enfants: '',
    situationProfessionnelle: '',
    tmi: '',
    placements: '',
    montantProjet: '',
    intention: '',
    objectif: '',
    canalPreference: '',
    dateRdv: '',
    heureRdv: '',
    telephone: '',
    email: ''
  });
  
  // État pour gérer l'historique des messages
  const [messages, setMessages] = useState([
    { 
      text: "Bonjour et bienvenue sur azalee-patrimoine.fr ! Je suis votre conseiller patrimonial virtuel. Vous souhaitez optimiser vos finances, investir, ou anticiper l'avenir ? Je peux vous aider à y voir clair.",
      sender: 'bot',
      options: [
        "Obtenir une réponse rapide à une question patrimoniale",
        "Être rappelé(e) par un conseiller",
        "Prendre un rendez-vous directement"
      ]
    }
  ]);
  
  // États pour gérer l'input et l'état de la conversation
  const [inputMessage, setInputMessage] = useState('');
  const [isConversationComplete, setIsConversationComplete] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState('');

  // Effet pour afficher le chatbot après un délai
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatBot(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Function to save data to MySQL database
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
          situation_matrimoniale: data.situationFamiliale || '',
          enfants: data.enfants || '',
          situation_professionnelle: data.situationProfessionnelle || '',
          tmi: data.tmi || '',
          placements_actuels: data.placements || '',
          budget_projet: data.montantProjet || '',
          intention: data.intention || '',
          objectif: data.objectif || '',
          canal_preference: data.canalPreference || '',
          date_rdv: data.dateRdv || '',
          telephone: data.telephone || '',
          email: data.email || ''
        })
      });

      if (!response.ok) {
        throw new Error('Failed to save to database');
      }

      const result = await response.json();
      console.log('Data saved to database:', result);
      return result;
    } catch (error) {
      console.error('Error saving to database:', error);
      throw error;
    }
  };

  // SARA Script - Intent Options
  const intentOptions = [
    "Optimiser mes placements financiers",
    "Réduire mes impôts",
    "Préparer ma retraite",
    "Transmettre mon patrimoine",
    "Investir dans l'immobilier",
    "Diversifier mon patrimoine",
    "Gérer une situation spécifique"
  ];

  // SARA Script - Profile Questions
  const profileQuestions = [
    {
      question: "Quel est votre prénom ?",
      field: 'prenom',
      validation: (value) => /^[a-zA-Z\s\-']{2,}$/.test(value),
      errorMessage: "Veuillez entrer un prénom valide (lettres uniquement)."
    },
    {
      question: "Quel est votre nom de famille ?",
      field: 'nom',
      validation: (value) => /^[a-zA-Z\s\-']{2,}$/.test(value),
      errorMessage: "Veuillez entrer un nom de famille valide (lettres uniquement)."
    },
    {
      question: "Quel est votre âge ?",
      field: 'age',
      validation: (value) => !isNaN(value) && parseInt(value) >= 18 && parseInt(value) <= 120,
      errorMessage: "Veuillez entrer un âge valide (un nombre entre 18 et 120)."
    },
    {
      question: "Quelle est votre adresse e-mail ?",
      field: 'email',
      validation: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      errorMessage: "Veuillez entrer une adresse e-mail valide."
    },
    {
      question: "Êtes-vous marié(e), pacsé(e) ou célibataire ?",
      field: 'situationFamiliale',
      options: ["Marié(e)", "Pacsé(e)", "Célibataire"]
    },
    {
      question: "Avez-vous des enfants ?",
      field: 'enfants',
      options: ["Oui", "Non"]
    },
    {
      question: "Quelle est votre situation professionnelle ?",
      field: 'situationProfessionnelle',
      options: ["Salarié", "Entrepreneur", "Retraité", "Profession libérale", "Autre"]
    },
    {
      question: "Connaissez-vous votre TMI ? (Taux Marginal d'Imposition)",
      field: 'tmi',
      options: ["Oui, je le connais", "Non, je ne le connais pas", "Je ne sais pas"]
    },
    {
      question: "Disposez-vous de placements financiers ou immobiliers ?",
      field: 'placements',
      options: ["Oui, financiers", "Oui, immobiliers", "Oui, les deux", "Non"]
    },
    {
      question: "Quel montant envisagez-vous pour un futur projet ?",
      field: 'montantProjet',
      options: [
        "Moins de 50 000 €",
        "50 000 € - 100 000 €", 
        "100 000 € - 250 000 €",
        "250 000 € - 500 000 €",
        "Plus de 500 000 €"
      ]
    }
  ];

  // SARA Script - Smart Scenarios
  const getScenarioResponse = (intent) => {
    const scenarios = {
      "Optimiser mes placements financiers": {
        explanation: "L'optimisation de vos placements vise à maximiser vos rendements tout en maîtrisant les risques selon votre profil.",
        question: "Quel est votre horizon d'investissement principal ?",
        options: ["Court terme (1-3 ans)", "Moyen terme (3-8 ans)", "Long terme (8+ ans)"]
      },
      "Réduire mes impôts": {
        explanation: "La réduction d'impôts passe par des placements défiscalisants et une optimisation de votre fiscalité.",
        question: "Quel est votre TMI actuel ?",
        options: ["11%", "30%", "41%", "45%", "Je ne sais pas"]
      },
      "Préparer ma retraite": {
        explanation: "La préparation de la retraite combine épargne long terme et optimisation fiscale pour sécuriser vos revenus futurs.",
        question: "À quel âge envisagez-vous de partir à la retraite ?",
        options: ["60-62 ans", "63-65 ans", "66-68 ans", "Plus de 68 ans"]
      },
      "Transmettre mon patrimoine": {
        explanation: "La transmission optimise le passage de votre patrimoine en minimisant les droits de succession.",
        question: "Souhaitez-vous protéger un enfant ou conjoint en particulier ?",
        options: ["Oui, mes enfants", "Oui, mon conjoint", "Oui, les deux", "Non"]
      },
      "Investir dans l'immobilier": {
        explanation: "L'investissement immobilier offre rendement locatif et plus-value à long terme avec avantages fiscaux.",
        question: "Quel type d'investissement immobilier vous intéresse ?",
        options: ["SCPI", "Immobilier direct", "Pinel", "Malraux", "Autre"]
      },
      "Diversifier mon patrimoine": {
        explanation: "La diversification répartit vos investissements pour réduire les risques et optimiser les rendements.",
        question: "Quelle classe d'actifs souhaitez-vous explorer ?",
        options: ["Actions", "Obligations", "Immobilier", "Or/Métaux", "Cryptomonnaies"]
      },
      "Gérer une situation spécifique": {
        explanation: "Chaque situation (divorce, succession, expatriation) nécessite une approche personnalisée.",
        question: "Quelle situation souhaitez-vous gérer ?",
        options: ["Divorce", "Succession", "Expatriation", "Héritage", "Autre"]
      }
    };
    return scenarios[intent] || scenarios["Optimiser mes placements financiers"];
  };

  // Fonction pour réinitialiser la conversation
  const resetConversation = () => {
    setCurrentStep(0);
    setUserInfo({
      nom: '',
      prenom: '',
      age: '',
      situationFamiliale: '',
      enfants: '',
      situationProfessionnelle: '',
      tmi: '',
      placements: '',
      montantProjet: '',
      intention: '',
      objectif: '',
      canalPreference: '',
      dateRdv: '',
      heureRdv: '',
      telephone: '',
      email: ''
    });
    setMessages([
      { 
        text: "Bonjour et bienvenue sur azalee-patrimoine.fr ! Je suis votre conseiller patrimonial virtuel. Vous souhaitez optimiser vos finances, investir, ou anticiper l'avenir ? Je peux vous aider à y voir clair.",
        sender: 'bot',
        options: [
          "Obtenir une réponse rapide à une question patrimoniale",
          "Être rappelé(e) par un conseiller",
          "Prendre un rendez-vous directement"
        ]
      }
    ]);
    setInputMessage('');
    setIsConversationComplete(false);
    setSelectedIntent('');
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const userMessage = { text: inputMessage, sender: 'user' };
      setMessages(prev => [...prev, userMessage]);
      const messageToProcess = inputMessage;
      setInputMessage('');

      // Step 1: Handle initial intent selection
      if (currentStep === 0) {
        if (inputMessage === "Obtenir une réponse rapide à une question patrimoniale") {
          setTimeout(() => {
            setMessages(prev => [...prev, {
              text: "Pour vous orienter efficacement, que souhaitez-vous explorer aujourd'hui ?",
              sender: 'bot',
              options: intentOptions
            }]);
          }, 1000);
          setCurrentStep(1);
        } else if (inputMessage === "Être rappelé(e) par un conseiller") {
          setTimeout(() => {
            setMessages(prev => [...prev, {
              text: "Parfait ! Pour qu'un conseiller puisse vous rappeler, j'ai besoin de quelques informations. Quel est votre prénom ?",
              sender: 'bot'
            }]);
          }, 1000);
          setCurrentStep(10); // Direct to callback flow
        } else if (inputMessage === "Prendre un rendez-vous directement") {
          setTimeout(() => {
            setMessages(prev => [...prev, {
              text: "Excellent ! Pour organiser votre rendez-vous, j'ai besoin de quelques informations. Quel est votre prénom ?",
              sender: 'bot'
            }]);
          }, 1000);
          setCurrentStep(20); // Direct to appointment flow
        }
      }
      // Step 2: Handle intent selection
      else if (currentStep === 1) {
        setSelectedIntent(inputMessage);
        const scenario = getScenarioResponse(inputMessage);
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: scenario.explanation,
            sender: 'bot'
          }]);
        }, 1000);
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: scenario.question,
            sender: 'bot',
            options: scenario.options
          }]);
        }, 2000);
        setCurrentStep(2);
      }
      // Step 3: Handle scenario response
      else if (currentStep === 2) {
        setUserInfo(prev => ({ ...prev, objectif: inputMessage }));
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: "Parfait ! Pour mieux comprendre votre situation et vous apporter une préconisation personnalisée, j'aurais besoin de quelques informations confidentielles. " + profileQuestions[0].question,
            sender: 'bot',
            options: profileQuestions[0].options
          }]);
        }, 1000);
        setCurrentStep(3);
      }
      // Step 4-12: Handle profile questions
      else if (currentStep >= 3 && currentStep < (3 + profileQuestions.length)) {
        const questionIndex = currentStep - 3;
        const question = profileQuestions[questionIndex];
        
        // --- VALIDATION LOGIC ---
        let isValid = true;
        // Check if the input is free text AND if a validation rule exists
        if (!question.options && question.validation) {
          isValid = question.validation(messageToProcess);
        }

        if (isValid) {
          // --- If VALID, proceed ---
          setUserInfo(prev => ({ ...prev, [question.field]: messageToProcess }));
          
          if (questionIndex < profileQuestions.length - 1) {
            const nextQuestion = profileQuestions[questionIndex + 1];
            setTimeout(() => {
              setMessages(prev => [...prev, {
                text: nextQuestion.question,
                sender: 'bot',
                options: nextQuestion.options
              }]);
            }, 1000);
            setCurrentStep(currentStep + 1);
          } else {
            // Profile complete, move to final engagement
            setTimeout(() => {
              setMessages(prev => [...prev, {
                text: "Je dispose maintenant des éléments essentiels pour vous apporter une préconisation personnalisée. Souhaitez-vous :",
                sender: 'bot',
                options: [
                  "Recevoir un mini-bilan PDF gratuit",
                  "Fixer un rendez-vous avec un conseiller patrimonial agréé Azalée",
                  "Être recontacté(e) ultérieurement"
                ]
              }]);
            }, 1000);
            setCurrentStep(13);
          }
        } else {
          // --- If INVALID, show error and wait ---
          setTimeout(() => {
            setMessages(prev => [...prev, {
              text: question.errorMessage || "Désolé, votre réponse n'est pas valide. Veuillez réessayer.",
              sender: 'bot'
            }]);
          }, 1000);
          // We DO NOT increment currentStep, so the bot asks the same question again.
        }
      }
      // Step 13: Handle final engagement
      else if (currentStep === 13) {
        if (inputMessage === "Recevoir un mini-bilan PDF gratuit") {
          // Save to database before concluding
          saveToDatabase({ ...userInfo, intention: selectedIntent }).then(() => {
            setTimeout(() => {
              setMessages(prev => [...prev, {
                text: "Excellent choix ! Votre mini-bilan personnalisé sera généré et envoyé à votre adresse e-mail. Merci pour votre confiance !",
                sender: 'bot'
              }]);
            }, 1000);
            setIsConversationComplete(true);
          }).catch(() => {
            setTimeout(() => {
              setMessages(prev => [...prev, {
                text: "Excellent choix ! Votre mini-bilan personnalisé sera généré et envoyé à votre adresse e-mail. Merci pour votre confiance !",
                sender: 'bot'
              }]);
            }, 1000);
            setIsConversationComplete(true);
          });
        } else if (inputMessage === "Fixer un rendez-vous avec un conseiller patrimonial agréé Azalée") {
          setTimeout(() => {
            setMessages(prev => [...prev, {
              text: "Parfait ! Quel moment vous conviendrait le mieux ?",
              sender: 'bot',
              options: [
                "Cette semaine",
                "La semaine prochaine",
                "Dans 2 semaines",
                "Plus tard"
              ]
            }]);
          }, 1000);
          setCurrentStep(14);
        } else if (inputMessage === "Être recontacté(e) ultérieurement") {
          // Save to database before concluding
          saveToDatabase({ ...userInfo, intention: selectedIntent }).then(() => {
            setTimeout(() => {
              setMessages(prev => [...prev, {
                text: "Pas de problème ! Un conseiller Azalée vous recontactera dans les prochains jours. Merci pour votre intérêt !",
                sender: 'bot'
              }]);
            }, 1000);
            setIsConversationComplete(true);
          }).catch(() => {
            setTimeout(() => {
              setMessages(prev => [...prev, {
                text: "Pas de problème ! Un conseiller Azalée vous recontactera dans les prochains jours. Merci pour votre intérêt !",
                sender: 'bot'
              }]);
            }, 1000);
            setIsConversationComplete(true);
          });
        }
      }
      // Step 14: Handle appointment scheduling
      else if (currentStep === 14) {
        setUserInfo(prev => ({ ...prev, dateRdv: inputMessage }));
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: "Quel canal préférez-vous pour ce rendez-vous ?",
            sender: 'bot',
            options: [
              "Téléphone",
              "Visio",
              "En agence"
            ]
          }]);
        }, 1000);
        setCurrentStep(15);
      }
      // Step 15: Handle channel selection
      else if (currentStep === 15) {
        setUserInfo(prev => ({ ...prev, canalPreference: inputMessage }));
        
        // Save to database
        saveToDatabase({ 
          ...userInfo, 
          intention: selectedIntent,
          canalPreference: inputMessage 
        }).then(() => {
          setTimeout(() => {
            setMessages(prev => [...prev, {
              text: "Parfait, c'est noté ! Un conseiller Azalée vous contactera au moment prévu. Merci pour votre confiance et à très bientôt !",
              sender: 'bot'
            }]);
          }, 1000);
          setIsConversationComplete(true);
        }).catch(() => {
          setTimeout(() => {
            setMessages(prev => [...prev, {
              text: "Parfait, c'est noté ! Un conseiller Azalée vous contactera au moment prévu. Merci pour votre confiance et à très bientôt !",
              sender: 'bot'
            }]);
          }, 1000);
          setIsConversationComplete(true);
        });
      }
      // Handle direct callback flow
      else if (currentStep === 10) {
        setUserInfo(prev => ({ ...prev, prenom: inputMessage }));
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: "Merci ! Quel est votre nom de famille ?",
            sender: 'bot'
          }]);
        }, 1000);
        setCurrentStep(10.5);
      }
      else if (currentStep === 10.5) {
        setUserInfo(prev => ({ ...prev, nom: inputMessage }));
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: "Merci ! Quel est votre numéro de téléphone pour que notre conseiller puisse vous rappeler ?",
            sender: 'bot'
          }]);
        }, 1000);
        setCurrentStep(10.6);
      }
      else if (currentStep === 10.6) {
        setUserInfo(prev => ({ ...prev, telephone: inputMessage }));
        
        // Save to database
        saveToDatabase({
          ...userInfo,
          prenom: userInfo.prenom,
          nom: userInfo.nom,
          telephone: inputMessage
        }).then(() => {
          setTimeout(() => {
            setMessages(prev => [...prev, {
              text: "Parfait ! Un conseiller Azalée vous rappellera dans les plus brefs délais. Merci pour votre confiance !",
              sender: 'bot'
            }]);
          }, 1000);
          setIsConversationComplete(true);
        }).catch(() => {
          setTimeout(() => {
            setMessages(prev => [...prev, {
              text: "Parfait ! Un conseiller Azalée vous rappellera dans les plus brefs délais. Merci pour votre confiance !",
              sender: 'bot'
            }]);
          }, 1000);
          setIsConversationComplete(true);
        });
      }
      // Handle direct appointment flow
      else if (currentStep === 20) {
        setUserInfo(prev => ({ ...prev, prenom: inputMessage }));
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: "Merci ! Quel est votre nom de famille ?",
            sender: 'bot'
          }]);
        }, 1000);
        setCurrentStep(20.5);
      }
      else if (currentStep === 20.5) {
        setUserInfo(prev => ({ ...prev, nom: inputMessage }));
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: "Merci ! Quel est votre numéro de téléphone ?",
            sender: 'bot'
          }]);
        }, 1000);
        setCurrentStep(20.6);
      }
      else if (currentStep === 20.6) {
        setUserInfo(prev => ({ ...prev, telephone: inputMessage }));
        setTimeout(() => {
          setMessages(prev => [...prev, {
            text: "Quel moment vous conviendrait le mieux pour un rendez-vous ?",
            sender: 'bot',
            options: [
              "Cette semaine",
              "La semaine prochaine", 
              "Dans 2 semaines",
              "Plus tard"
            ]
          }]);
        }, 1000);
        setCurrentStep(14);
      }
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
            <h3>SARA - Azalée Patrimoine</h3>
            <p>Conseiller Patrimonial Virtuel</p>
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