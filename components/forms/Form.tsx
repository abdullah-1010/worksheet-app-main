"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import { useState } from "react";
import { Button } from "../ui/button";
import SubmitButton from "../SubmitButton";
import { UserFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datepicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

const MForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      exam: "",
      topic: "",
      questions: undefined, // Use undefined for an optional number field
    },
  });

  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);

    // Existing API call for OpenAI (left as commented code for now)
    /*
    try {
      console.log("Form submitted:", values);
  
      // Send request to the backend API for question generation
      const response = await fetch("/api/worksheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
  
      if (!response.ok) {
        throw new Error("Failed to generate questions.");
      }
  
      const data = await response.json();
  
      // Redirect user to the worksheet page with generated questions
      router.push(`/worksheet?data=${encodeURIComponent(JSON.stringify(data))}`);
    } catch (error) {
      console.error(error);
      alert("An error occurred while generating the worksheet.");
    }
    */

    // New Code: Save quiz result to PostgreSQL
    try {
      console.log("Form submitted:", values);

      // Redirect to the quiz page with the form data
      router.push(
        `/worksheet?exam=${values.exam}&topic=${values.topic}&questions=${values.questions}`
      );
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("An error occurred while submitting the form.");
    }

    // Continue with redirect to worksheet page
    setTimeout(() => {
      router.push("/worksheet");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header pt-3">Hi there 👋</h1>
          <p className="text-dark-700">Get started with your tests.</p>
        </section>

        {/* Dropdown for Exam Type */}
        <CustomFormField
          fieldType={FormFieldType.SELECT}
          control={form.control}
          name="exam"
          label="Exam Type"
          options={[
            { value: "A-Level", label: "A-Level" },
            { value: "GCSE", label: "GCSE" },
            { value: "SAT", label: "SAT" },
            { value: "IB", label: "IB" },
          ]}
        />

        {/* Dropdown for Topic */}
        <CustomFormField
          fieldType={FormFieldType.SELECT}
          control={form.control}
          name="topic"
          label="Topic of Choice"
          options={[
            { value: "Algebra", label: "Algebra" },
            { value: "Calculus", label: "Calculus" },
            { value: "Geometry", label: "Geometry" },
            { value: "Trigonometry", label: "Trigonometry" },
          ]}
        />

        {/* Number Input for Questions */}
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="questions"
          label="Number of Questions"
          placeholder="Enter a number between 1 and 20"
          type="number"
          valueAsNumber
        />

        <SubmitButton isLoading={isLoading}>Generate Worksheet</SubmitButton>
      </form>
    </Form>
  );
};

export default MForm;
