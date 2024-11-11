// route.ts
import { NextResponse } from "next/server";

// Uncomment these lines when using OpenAI API
// import { generateQuestions } from "../../../lib/geminiClient";

export async function POST(request: Request) {
  const { exam, topic, questions } = await request.json();

  // Comment out the OpenAI API call and response handling
  /*
  if (exam && topic && questions) {
    try {
      const prompt = `
        Generate ${questions} progressively harder math questions on the topic of ${topic} for ${exam} preparation.
        Format each question as "Q: [Question text]".
      `;
      const generatedText = await generateQuestions(prompt);
      const questionList = generatedText
        ?.split("\n")
        .filter((q: string) => q.startsWith("Q:"));

      return NextResponse.json({ questions: questionList });
    } catch (error: any) {
      console.error("Error generating questions:", error.message);
      return NextResponse.json(
        { error: "Failed to generate questions." },
        { status: 500 }
      );
    }
  }
  */

  // Return a dummy success response for now
  return NextResponse.json({ message: "Worksheet generated" });
}
