
import { GoogleGenAI, Type } from "@google/genai";
import { GradingResult } from "../types";

// Always use the correct initialization pattern for @google/genai
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeCottonQuality = async (
  description: string,
  imageData?: string
): Promise<GradingResult> => {
  // Use gemini-3-pro-preview for complex reasoning tasks like cotton fiber analysis
  const model = "gemini-3-pro-preview";
  
  const systemInstruction = `
    You are an expert Cotton Grader for CottonMark. 
    Analyze the provided cotton sample description (and optional image data) and provide a professional grading report.
    Use USDA standards (like Middling, Strict Low Middling, etc.).
    Provide specific metrics even if they are estimates based on the visual/description.
    Be professional, concise, and accurate.
  `;

  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      grade: { type: Type.STRING, description: "USDA standard grade (e.g., Middling 31-3)" },
      stapleLength: { type: Type.STRING, description: "Fiber length in inches (e.g., 1-1/8)" },
      strength: { type: Type.STRING, description: "Grams per tex (e.g., 29.5)" },
      micronaire: { type: Type.STRING, description: "Fiber fineness value (e.g., 4.2)" },
      colorGrade: { type: Type.STRING, description: "Reflectance and yellowness assessment" },
      trashContent: { type: Type.STRING, description: "Percentage of non-lint content" },
      explanation: { type: Type.STRING, description: "Short professional summary of findings" },
      marketValue: { type: Type.STRING, description: "Estimated market premium or discount" }
    },
    required: ["grade", "stapleLength", "strength", "micronaire", "colorGrade", "trashContent", "explanation", "marketValue"]
  };

  const contents = imageData 
    ? {
        parts: [
          { inlineData: { mimeType: "image/jpeg", data: imageData.split(',')[1] } },
          { text: `Grade this cotton sample. User notes: ${description}` }
        ]
      }
    : `Grade this cotton sample based on this description: ${description}`;

  const response = await ai.models.generateContent({
    model,
    contents,
    config: {
      systemInstruction,
      responseMimeType: "application/json",
      responseSchema,
    },
  });

  // Access .text property directly from the GenerateContentResponse object
  return JSON.parse(response.text || '{}') as GradingResult;
};
