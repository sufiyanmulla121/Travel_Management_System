import { Router } from "express";
import * as user from "../controller/users.controller.js";
import {
  authMiddleware,
  validation,
  isAdmin,
} from "../middleware/middleware.js";
import { loginSchema, registerSchema } from "../lib/zod.schema.js";

const userRoutes = Router();

userRoutes.post("/register", validation(registerSchema), user.registerUser);
userRoutes.post("/login", validation(loginSchema), user.login);
userRoutes.get("/getAllUsers", authMiddleware, isAdmin, user.getAllUsers);

export default userRoutes;
