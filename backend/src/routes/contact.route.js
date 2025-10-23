import { Router } from "express";
import * as contact from "../controller/contact.controller.js";
import { authMiddleware } from "../middleware/middleware.js";

const contactRoutes = Router();

contactRoutes.get("/getcontacts", contact.getContacts);
contactRoutes.post("/addcontact", authMiddleware, contact.addContact);

export default contactRoutes;
