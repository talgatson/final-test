import mongoose from "mongoose";

const favoriteLocationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  { timestamps: true }
);
export const FavoriteLocation = mongoose.model(
  "FavoriteLocation",
  favoriteLocationSchema
);
