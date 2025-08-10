import { z } from "zod";

// address schema
const addressZodSchema = z.object({
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  postalCode: z.string().min(1, "Postal code is required"),
});

// full user schema including embedded address
export const userZodSchema = z.object({
  userEmail: z.string()
    .email("Invalid email"),

  userName: z.string()
    .min(4, "username lagbe")
    .max(11, "username must be at most 11 characters"),

  password: z.string(),
  address: addressZodSchema // Embedded schema
});
