"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SubmitButton from "../components/SubmitButton";
import CustomFormField from "./CustomFormField";
import { FormFieldType } from "./forms/Form";
import { getAuth } from "firebase/auth";

const questionsList = [
  "Q1: What is the derivative of x^2?",
  "Q2: Solve the integral of sin(x) dx.",
  "Q3: What is the limit of (1 + 1/n)^n as n approaches infinity?",
  "Q4: Find the value of the definite integral of x dx from 0 to 2.",
  "Q5: Differentiate e^(2x).",
  "Q6: Solve for x: ln(x) = 1.",
  "Q7: What is the area under the curve of y = x^2 from x=0 to x=1?",
  "Q8: Calculate the second derivative of x^3.",
  "Q9: Evaluate the integral of 1/x dx.",
  "Q10: Find the value of the derivative of sin(x) at x = π/4.",
];

// Define correct answers
const correctAnswersList = [
  "2x",
  "-cos(x) + C",
  "e",
  "2",
  "2e^(2x)",
  "e",
  "1/3",
  "6x",
  "ln|x| + C",
  "cos(π/4)",
];

// Validation schema
const WorksheetValidation = z.object({
  answers: z.array(z.string().min(1, "Answer cannot be empty")),
});

export default function Worksheet() {
  const [isLoading, setIsLoading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackList, setFeedbackList] = useState<string[]>([]);

  // Initialize form using react-hook-form and zod validation
  const methods = useForm({
    resolver: zodResolver(WorksheetValidation),
    defaultValues: {
      answers: Array(questionsList.length).fill(""),
    },
  });

  // Handle form submission
  // Handle form submission
  const onSubmit = async (values: { answers: string[] }) => {
    setIsLoading(true);

    // Calculate feedback and total marks
    const feedback = values.answers.map((answer, index) => {
      const correctAnswer = correctAnswersList[index].toLowerCase().trim();
      const userAnswer = answer.toLowerCase().trim();

      // Check if the user's answer is correct
      if (userAnswer === correctAnswer) {
        return `Correct Answer: ${correctAnswersList[index]}`;
      } else {
        return `Wrong Answer. Correct Answer is: ${correctAnswersList[index]}`;
      }
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

      // Hardcoded quiz level and topic
      const quizLevel = "A-Level"; // Hardcoded value
      const quizTopic = "Calculus"; // Hardcoded value

      // Prepare quiz data to save
      const quizData = {
        userId,
        userName,
        userEmail,
        quizLevel,
        quizTopic,
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
          <p className="text-dark-700">Answer all the questions below:</p>
        </section>

        {/* Render questions, answers, and feedback */}
        {questionsList.map((question, index) => (
          <div key={index} className="mb-6">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={methods.control}
              name={`answers.${index}`}
              label={question}
              placeholder="Your answer"
            />
            {showFeedback && (
              <p
                className={`mt-2 ${
                  feedbackList[index].startsWith("Correct")
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
