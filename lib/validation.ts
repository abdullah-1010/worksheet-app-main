import { z } from "zod";

export const UserFormValidation = z.object({
  exam: z
    .string()
    .min(1, "Exam type is required")
    .refine((exam) => ["A-Level", "GCSE", "SAT", "IB"].includes(exam), {
      message: "Invalid exam type",
    }),
  topic: z
    .string()
    .min(1, "Topic is required")
    .refine(
      (topic) =>
        ["Algebra", "Calculus", "Geometry", "Trigonometry"].includes(topic),
      {
        message: "Invalid topic",
      }
    ),
  questions: z
    .union([z.string(), z.number()])
    .refine((val) => Number(val) >= 1 && Number(val) <= 20, {
      message: "Number of questions must be between 1 and 20",
    })
    .transform((val) => Number(val)),
});
