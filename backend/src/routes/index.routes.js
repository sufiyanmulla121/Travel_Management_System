import { Router } from "express";
import bookingRoutes from "./bookings.route.js";
import contactRoutes from "./contact.route.js";
import locationRoutes from "./location.route.js";
import placeRoutes from "./place.route.js";
import userRoutes from "./users.route.js";

const routes = Router();

routes.use("/booking", bookingRoutes);
routes.use("/contacts", contactRoutes);
routes.use("/location", locationRoutes);
routes.use("/place", placeRoutes);
routes.use("/users", userRoutes);

export default routes;
