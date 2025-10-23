import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Enter valid email" }),
  password: z.string().min(8, { message: "Min 8 char required" }),
});

export const registerSchema = z.object({
  name: z.string().min(2, { message: "Min 2 char required for name" }),
  email: z.string().email({ message: "Email should be i proper format" }),
  password: z.string().min(8, { message: "min 8 digits required" }),
  role: z
    .enum(["admin", "user"], {
      errorMap: () => ({ message: "Role must be either 'admin' or 'user'" }),
    })
    .default("user"),
});
