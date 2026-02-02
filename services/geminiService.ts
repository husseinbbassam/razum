
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getProjectConsultation(query: string) {
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
      advice: "Oprostite, trenutno ne morem procesirati vaše zahteve. Prosimo, kontaktirajte nas direktno.",
      suggestedServices: [],
      nextStep: "Kontaktirajte nas na info@razum.si"
    };
  }
}
