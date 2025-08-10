import z from "zod";

export const createUserZodSchema = z.object({
  name: z.string(),
  email: z.string(),
})