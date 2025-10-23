import { Router } from "express";
import { authMiddleware } from "../middleware/middleware.js";
import * as booking from "../controller/booking.controller.js";

const bookingRoutes = Router();

bookingRoutes.post("/bookplace", authMiddleware, booking.bookplace);
bookingRoutes.get(
  "/getBookingsByUserId/:id",
  authMiddleware,
  booking.getBookById,
);

export default bookingRoutes;
