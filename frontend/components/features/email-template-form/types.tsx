import { z } from "zod";
export interface TEmailTemplateSchema {
  receiver: string;
  subject: string;
  description: string;
  checked?: boolean;
}

export const emailTemplateSchema = z.object({
  receiver: z.string(),
  subject: z.string().min(1, { message: "Subject is required" }),
  description: z
    .string()
    .min(10, { message: "Description must have atleast 10 letters." }),
  checked: z.boolean().optional(),
});
