import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY as string;
if (!apiKey) {
  throw new Error(
    "API key is missing. Please set GEMINI_API_KEY in your .env file."
  );
}

// Initialize the PaLM-2 model client
const model = new GoogleGenerativeAI(apiKey).getGenerativeModel({
  model: "palm-2-text",
});

export async function generateQuestions(prompt: string) {
  try {
    console.log("Sending prompt to PaLM-2 API:", prompt);

    // Use the correct method for text generation
    const response = await model.generateTextPrompt({
      prompt: {
        text: prompt,
      },
      maxOutputTokens: 1500,
      temperature: 0.7,
    });

    const generatedText = response.candidates?.[0]?.text?.trim();
    if (!generatedText) {
      throw new Error("No response from PaLM-2 API.");
    }

    return generatedText;
  } catch (error: any) {
    console.error("Error calling PaLM-2 API:", error.message);
    throw new Error("Failed to generate questions using PaLM-2 API.");
  }
}
