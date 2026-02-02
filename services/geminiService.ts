
import { GoogleGenAI, Type } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.warn('VITE_GEMINI_API_KEY is not set. AI features will be limited.');
}

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export async function getProjectConsultation(query: string) {
  // Check if AI is available
  if (!ai) {
    console.error('AI service not initialized: API key is missing');
    return {
      advice: "AI consultant is currently unavailable. Please contact us directly for assistance.",
      suggestedServices: [],
      nextStep: "Contact us at info@razum.si"
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are the AI assistant for "Razum", a top-tier IT development company in Slovenia. 
        Your goal is to provide expert advice on IT projects. 
        The company specializes in Mobile Apps, Web Platforms, and Custom Software.
        Keep responses professional, concise, and focused on how "Razum" can help.
        Answer in the language the user uses (primarily Slovenian or English).`,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            advice: { type: Type.STRING, description: 'The main advice or answer to the query.' },
            suggestedServices: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: 'List of specific Razum services that apply (e.g., Mobile, Web, Cloud).' 
            },
            nextStep: { type: Type.STRING, description: 'A brief call to action or follow-up question.' }
          }
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Consultation error:", error);
    return {
      advice: "Sorry, we cannot process your request at this time. Please contact us directly.",
      suggestedServices: [],
      nextStep: "Contact us at info@razum.si"
    };
  }
}
