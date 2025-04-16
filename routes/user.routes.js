import express from "express";
import {
  getMe,
  updateEmail,
  updateUsername,
  deleteMe,
} from "../controllers/user.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";

const userRouter = express.Router();
userRouter.get("/me", authUser, getMe);
userRouter.patch("/me/name", authUser, updateUsername);
userRouter.patch("/me/email", authUser, updateEmail);
userRouter.delete("/me/delete", authUser, deleteMe);

export default userRouter;
