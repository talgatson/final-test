import mongoose from "mongoose";

const weatherDataSchema = new mongoose.Schema(
  {
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
      required: true,
    },

    city: { type: String, required: true },
    temperature: { type: Number, required: true },
    humidity: { type: Number, required: true },
    windSpeed: { type: Number, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);
export const WeatherData = mongoose.model("WeatherData", weatherDataSchema);
