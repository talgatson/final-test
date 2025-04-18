import express from "express";
import {
  createLocation,
  getLocations,
  updateLocation,
  deleteLocation,
} from "../controllers/favoriteLocation.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";
const favoriteLocationRouter = express.Router();
favoriteLocationRouter.post("/create", authUser, createLocation);
favoriteLocationRouter.get("/", authUser, getLocations);
favoriteLocationRouter.patch("/", authUser, updateLocation);
favoriteLocationRouter.delete("/", authUser, deleteLocation);
export default favoriteLocationRouter;
