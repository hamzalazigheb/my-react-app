import { callNlpService } from '../../services/nlpService';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const { message, sessionId } = req.body;

  // Validate input
  if (!message || !sessionId) {
    return res.status(400).json({ message: 'The "message" and "sessionId" fields are required.' });
  }

  try {
    // Call the placeholder NLP service
    const nlpResponse = await callNlpService(message, sessionId);

    // The NLP service returns the identified intent and a formatted response text
    const { intent, responseText } = nlpResponse;
    
    // Send the response back to the chatbot front-end
    res.status(200).json({ 
      intent, 
      reply: responseText 
    });

  } catch (error) {
    console.error('NLP API Route Error:', error);
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
} 