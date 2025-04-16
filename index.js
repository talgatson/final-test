import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import weatherRouter from "./routes/weather.routes.js";
import authRoutes from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import cors from "cors";

const app = express();

const PORT = 8000;
// const connectionString = process.env.DB_URL;
const connectionString = "mongodb://127.0.0.1:27017";

async function connectDatabase() {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
app.use(express.json());
app.use(cors({}));
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/", weatherRouter);
app.use("/user", userRouter);
app.use("/auth", authRoutes);
app.listen(PORT, async () => {
  await connectDatabase();
  console.log(`Сервер запущен на порту ${PORT}`);
});
