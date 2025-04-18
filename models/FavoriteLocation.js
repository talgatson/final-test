import mongoose from "mongoose";

const favoriteLocationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    city: { type: String, required: true },
  },
  { timestamps: true }
);

favoriteLocationSchema.index({ user: 1, city: 1 }, { unique: true });
export const FavoriteLocation = mongoose.model(
  "FavoriteLocation",
  favoriteLocationSchema
);
