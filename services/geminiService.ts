import { GoogleGenAI } from "@google/genai";
import { Post } from "../types";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key not found in environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const summarizePosts = async (posts: Post[]): Promise<string> => {
  const ai = getClient();
  if (!ai) return "API Configuration Error: No Key found.";

  const contentToAnalyze = posts.map(p => 
    `- [${p.source}] ${p.author}: ${p.title} (${p.content.substring(0, 100)}...)`
  ).join("\n");

  const prompt = `
    You are an AI trend analyst. I have collected recent posts from social media and official changelogs regarding Artificial Intelligence.
    
    Please provide a concise, "Morning Briefing" style summary of these updates. 
    Group them logically (e.g., "Community Buzz", "Official Updates").
    Keep the tone professional but warm and accessible.
    
    Data:
    ${contentToAnalyze}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || "No summary generated.";
  } catch (error) {
    console.error("Gemini Analysis Failed:", error);
    return "Failed to generate analysis at this time.";
  }
};
