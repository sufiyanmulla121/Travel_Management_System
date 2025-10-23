import { Router } from "express";
import * as location from "../controller/location.controller.js";
import { authMiddleware } from "../middleware/middleware.js";

const locationRoutes = Router();

locationRoutes.get("/getlocations", location.getLocation);
locationRoutes.get("/getAllBookings", authMiddleware, location.getAllBooking);
locationRoutes.post("/addlocation", authMiddleware, location.addLocation);

export default locationRoutes;
