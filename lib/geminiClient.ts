import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY as string;
if (!apiKey) {
  throw new Error(
    "API key is missing. Please set OPENAI_API_KEY in your .env file."
  );
}

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey,
});

export async function generateQuestions(prompt: string) {
  try {
    console.log("Sending prompt to OpenAI API:", prompt);

    // Call OpenAI GPT-3.5 Turbo
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are an assistant generating math questions.",
        },
        { role: "user", content: prompt },
      ],
      max_tokens: 1500,
      temperature: 0.7,
    });

    const generatedText = response.choices[0]?.message?.content?.trim();
    if (!generatedText) {
      throw new Error("No response from OpenAI API.");
    }

    return generatedText;
  } catch (error: any) {
    console.error("Error calling OpenAI API:", error.message);
    throw new Error("Failed to generate questions using OpenAI API.");
  }
}
