import { z } from "zod";

/**
 * Login Validation Schema
 */
export const loginSchema = z.object({
  phone: z
    .string()
    .min(1, "Mobile number is required")
    .regex(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

export type LoginInput = z.infer<typeof loginSchema>;

/**
 * Signup Validation Schema
 */
export const signupSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Mobile number is required")
    .regex(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits"),
  dob: z
    .string()
    .min(1, "Date of birth is required"),
  gender: z
    .enum(["male", "female"], {
      required_error: "Please select a gender",
    }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  agreedToTerms: z
    .boolean()
    .refine((val) => val === true, "You must agree to the terms and privacy policy"),
});

export type SignupInput = z.infer<typeof signupSchema>;
