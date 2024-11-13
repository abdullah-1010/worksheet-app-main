"use client";

import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SubmitButton from "../components/SubmitButton";
import CustomFormField from "./CustomFormField";
import { FormFieldType } from "./forms/Form";
import { getAuth } from "firebase/auth";
import { predefinedQuestions } from "./questions";
import { useSearchParams } from "next/navigation";

// Define the form data type explicitly
type WorksheetFormData = {
  exam: string;
  topic: string;
  questions: number;
  answers: string[];
};

type ExamType = "A-Level" | "GCSE";
type TopicType = "Algebra" | "Calculus" | "Geometry";

// Validation schema
const WorksheetValidation = z.object({
  answers: z.array(z.string().min(1, "Answer cannot be empty")),
});

export default function Worksheet() {
  // Fetch query parameters using useSearchParams at the top level
  const searchParams = useSearchParams();
  const examType = (searchParams.get("exam") ||
    "GCSE") as keyof typeof predefinedQuestions;
  const topic = (searchParams.get("topic") ||
    "Algebra") as keyof (typeof predefinedQuestions)["A-Level"];
  const numQuestions = parseInt(searchParams.get("questions") || "10");

  const [isLoading, setIsLoading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackList, setFeedbackList] = useState<string[]>([]);
  const [questionsList, setQuestionsList] = useState<
    { question: string; answer: string }[]
  >([]);

  // Initialize form using react-hook-form and zod validation
  const methods = useForm<WorksheetFormData>({
    resolver: zodResolver(WorksheetValidation),
    defaultValues: {
      exam: "GCSE",
      topic: "Algebra",
      questions: 10,
      answers: [],
    },
  });

  // Fetch the questions based on user input
  useEffect(() => {
    // Validate the form values
    if (!examType || !topic) {
      console.error("Invalid URL parameters: Missing exam type or topic.");
      return;
    }

    // Fetch the correct questions based on the selected values
    const selectedQuestions = predefinedQuestions[examType]?.[topic] ?? [];

    // Ensure we have enough questions for the requested number
    const availableQuestions = selectedQuestions.length;
    const finalNumQuestions = Math.min(numQuestions, availableQuestions);

    if (numQuestions > availableQuestions) {
      alert(
        `Only ${availableQuestions} questions are available for ${examType} - ${topic}. Showing ${availableQuestions} questions instead.`
      );
    }

    // Randomly select the requested number of questions
    const randomizedQuestions = selectedQuestions
      .sort(() => 0.5 - Math.random())
      .slice(0, finalNumQuestions);

    setQuestionsList(randomizedQuestions);

    // Reset the answers array based on the number of selected questions
    methods.reset({
      answers: Array(randomizedQuestions.length).fill(""),
    });
  }, [examType, topic, numQuestions, methods]);

  // Handle form submission
  const onSubmit = async (values: { answers: string[] }) => {
    setIsLoading(true);

    // Calculate feedback and total marks
    const feedback = values.answers.map((answer, index) => {
      const correctAnswer = questionsList[index]?.answer.toLowerCase().trim();
      const userAnswer = answer.toLowerCase().trim();

      return userAnswer === correctAnswer
        ? `Correct Answer: ${questionsList[index]?.answer}`
        : `Wrong Answer. Correct Answer is: ${questionsList[index]?.answer}`;
    });

    setFeedbackList(feedback);
    setShowFeedback(true);

    try {
      // Get user info from Firebase Authentication
      const auth = getAuth();
      const currentUser = auth.currentUser;

      if (!currentUser) {
        alert("User is not signed in.");
        setIsLoading(false);
        return;
      }

      // Extract user info
      const userId = currentUser.uid;
      const userName = currentUser.displayName || "Unknown User";
      const userEmail = currentUser.email || "No Email";

      // Calculate total marks (number of correct answers)
      const totalMarks = feedback.filter((item) =>
        item.startsWith("Correct")
      ).length;

      // Prepare quiz data to save
      const quizData = {
        userId,
        userName,
        userEmail,
        quizLevel: examType,
        quizTopic: topic,
        marks: totalMarks,
      };

      console.log("Quiz data to save:", quizData);

      // Send quiz result data to the API route
      const saveResponse = await fetch("/api/worksheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quizData),
      });

      if (!saveResponse.ok) {
        const errorData = await saveResponse.json();
        console.error("Error response:", errorData);
        throw new Error(errorData.error || "Failed to save quiz result.");
      }

      const saveData = await saveResponse.json();
      console.log("Quiz result saved:", saveData.message);
      alert("Quiz result saved successfully!");
    } catch (error) {
      console.error("Error saving quiz result:", error);
      alert("An error occurred while saving the quiz result.");
    }

    setIsLoading(false);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="space-y-6 flex-1"
      >
        <section className="mb-12 space-y-4">
          <h1 className="header pt-3">Generated Quiz</h1>
          <p className="text-dark-700">
            Answer the selected number of questions:
          </p>
        </section>

        {/* Render questions and feedback */}
        {questionsList.map((questionObj, index) => (
          <div key={index} className="mb-6">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={methods.control}
              name={`answers.${index}`}
              label={questionObj.question}
              placeholder="Your answer"
              max={undefined}
              min={undefined}
            />
            {showFeedback && (
              <p
                className={`mt-2 ${
                  feedbackList[index]?.startsWith("Correct")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {feedbackList[index]}
              </p>
            )}
          </div>
        ))}

        <SubmitButton isLoading={isLoading}>Submit Quiz</SubmitButton>
      </form>
    </FormProvider>
  );
}
