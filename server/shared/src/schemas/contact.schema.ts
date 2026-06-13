import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
  company: z.string().max(200).optional().or(z.literal("")),
  mobile: z.string().min(7).max(30),
  message: z.string().min(1).max(5000),
  website: z.string().max(0).optional(),
});

export type ContactSchema = z.infer<typeof contactSchema>;
