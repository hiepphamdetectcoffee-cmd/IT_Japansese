import { GoogleGenAI, Type } from "@google/genai";
import { Feedback, Message, Topic } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getChatResponse(
  topic: Topic,
  history: Message[],
  userInput: string
): Promise<{ reply: string; feedback: Feedback }> {
  const systemInstruction = `
${topic.systemPrompt}

IMPORTANT: You must ALWAYS respond in JSON format with the following structure:
{
  "reply": "Your conversational response in Japanese as the ${topic.role}. This should acknowledge the user's previous answer and lead into the next part of the conversation.",
  "feedback": {
    "corrected": "The user's input corrected for grammar and politeness",
    "natural": "A more natural/native-sounding version of the user's input",
    "explanation": "A short explanation in English of the corrections made",
    "nextQuestion": "The specific next interview question in Japanese (only for interview topic). If not an interview, leave this empty or omit it."
  }
}

The user is practicing Japanese for IT workplace. Be helpful, stay in character, and drive the conversation forward.
`;

  const chatHistory = history.map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.content }]
  }));

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...chatHistory,
        { role: 'user', parts: [{ text: userInput }] }
      ],
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            reply: { type: Type.STRING },
            feedback: {
              type: Type.OBJECT,
              properties: {
                corrected: { type: Type.STRING },
                natural: { type: Type.STRING },
                explanation: { type: Type.STRING },
                nextQuestion: { type: Type.STRING }
              },
              required: ["corrected", "natural", "explanation"]
            }
          },
          required: ["reply", "feedback"]
        }
      }
    });

    const result = JSON.parse(response.text || "{}");
    return {
      reply: result.reply || "申し訳ありません、エラーが発生しました。",
      feedback: result.feedback || {
        corrected: userInput,
        natural: userInput,
        explanation: "Could not generate feedback."
      }
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      reply: "エラーが発生しました。もう一度お試しください。",
      feedback: {
        corrected: userInput,
        natural: userInput,
        explanation: "An error occurred while processing your request."
      }
    };
  }
}
