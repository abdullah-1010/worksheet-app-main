"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SubmitButton from "../components/SubmitButton";
import CustomFormField from "./CustomFormField";
import { FormFieldType } from "./forms/Form";
import katex from "katex";
import "katex/dist/katex.min.css"; // Import KaTeX CSS

// Define questions with LaTeX expressions
const questionsList = [
  { question: "Q1: \\( \\frac{d}{dx} x^2 \\)" },
  { question: "Q2: \\( \\int \\sin(x) \\, dx \\)" },
  {
    question:
      "Q3: \\( \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n \\)",
  },
  { question: "Q4: \\( \\int_0^2 x \\, dx \\)" },
  { question: "Q5: \\( \\frac{d}{dx} e^{2x} \\)" },
  { question: "Q6: \\( \\ln(x) = 1 \\)" },
  { question: "Q7: \\( \\int_0^1 x^2 \\, dx \\)" },
  { question: "Q8: \\( \\frac{d^2}{dx^2} x^3 \\)" },
  { question: "Q9: \\( \\int \\frac{1}{x} \\, dx \\)" },
  {
    question:
      "Q10: \\( \\frac{d}{dx} \\sin(x) \\Bigg|_{x = \\frac{\\pi}{4}} \\)",
  },
];

// Validation schema
const WorksheetValidation = z.object({
  answers: z.array(z.string().min(1, "Answer cannot be empty")),
});

export default function Worksheet() {
  const [isLoading, setIsLoading] = useState(false);

  // Initialize form using react-hook-form and zod validation
  const methods = useForm({
    resolver: zodResolver(WorksheetValidation),
    defaultValues: {
      answers: Array(questionsList.length).fill(""),
    },
  });

  // Handle form submission
  const onSubmit = (values) => {
    setIsLoading(true);
    console.log("Submitted answers:", values);
    alert("Worksheet submitted successfully!");
    setIsLoading(false);
  };

  const MathText = ({ mathExpression }) => {
    const html = katex.renderToString(mathExpression, {
      throwOnError: false,
    });

    return <span dangerouslySetInnerHTML={{ __html: html }} />;
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

        {/* Render questions using CustomFormField */}
        {questionsList.map((item, index) => (
          <CustomFormField
            key={index}
            fieldType={FormFieldType.INPUT}
            control={methods.control}
            name={`answers.${index}`}
            label={item.question}
            placeholder="Your answer"
          />
        ))}

        <SubmitButton isLoading={isLoading}>Submit Quiz</SubmitButton>
      </form>
    </FormProvider>
  );
}
