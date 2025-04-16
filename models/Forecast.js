import mongoose from "mongoose";

const forecastSchema = new mongoose.Schema(
  {
    location: { type: mongoose.Schema.Types.ObjectId, ref: "FavoriteLocation" },
    temperature: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Forecast = mongoose.model("Forecast", forecastSchema);
