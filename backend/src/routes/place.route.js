import { Router } from "express";
import * as place from "../controller/place.controller.js";
import { authMiddleware } from "../middleware/middleware.js";

const placeRoutes = Router();

placeRoutes.get("/getallplaces", place.getAllPlaces);
placeRoutes.get("/getPlaceById/:id", place.getPlaceById);
placeRoutes.get("/getPlaceByIdFood", place.getPlaceByIdFood);
placeRoutes.post("/addroom", authMiddleware, place.addRoom);

export default placeRoutes;
