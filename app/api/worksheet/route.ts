import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { userId, userName, userEmail, quizLevel, quizTopic, marks } =
      await request.json();

    // Check for missing required fields
    if (!userId || !userName || !userEmail) {
      console.error("Missing required fields:", {
        userId,
        userName,
        userEmail,
      });
      return NextResponse.json(
        { error: "User information is missing." },
        { status: 400 }
      );
    }

    // Save quiz result to PostgreSQL using Prisma
    const quizResult = await prisma.quizResult.create({
      data: {
        userId,
        userName,
        quizLevel,
        quizTopic,
        marks,
        createdAt: new Date(),
      },
    });

    console.log("Quiz result saved:", quizResult);

    // Return a success response
    return NextResponse.json({
      message: "Quiz result saved successfully.",
    });
  } catch (error: any) {
    console.error("Error saving quiz result:", error.message);
    return NextResponse.json(
      { error: "Failed to save quiz result." },
      { status: 500 }
    );
  }
}
