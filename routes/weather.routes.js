import express from "express";
import { getWeather, getTime } from "../controllers/weather.controller.js";

const weatherRouter = express.Router();

weatherRouter.get("/weather/:city", getWeather);
weatherRouter.get("/time/:city", getTime);

export default weatherRouter;
