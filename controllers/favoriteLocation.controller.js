import { FavoriteLocation } from "../models/FavoriteLocation.js";

export const createLocation = async (req, res) => {
  try {
    const { city } = req.body;
    if (!city) {
      return res.status(400).json({ message: "City is required" });
    }
    const existingfavoriteLocation = await FavoriteLocation.findOne({
      city,
      user: req.userId,
    });
    if (existingfavoriteLocation) {
      return res.status(409).json({ message: "Location already exists" });
    }
    const newLocation = await FavoriteLocation.create({
      city,
      user: req.userId,
    });
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLocations = async (req, res) => {
  try {
    const locations = await FavoriteLocation.find({ user: req.userId });
    res.json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const { city } = req.body;

    console.log("PATCH /locations/:id");
    console.log("city:", city);
    console.log("id:", id);

    if (!city) {
      return res.status(400).json({ message: "City is required" });
    }
    const newUpdatedLocation = await FavoriteLocation.findOneAndUpdate(
      { _id: id },
      { city: city },
      { new: true, runValidators: true }
    );

    if (!newUpdatedLocation) {
      return res.status(404).json({ message: "Location not found" });
    }
    res.json(newUpdatedLocation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const deleteLocation = async (req, res) => {
  try {
    const { city } = req.body;
    if (!city) {
      return res.status(400).json({ message: "City is required" });
    }
    const deletedLocation = await FavoriteLocation.findOneAndDelete({
      user: req.userId,
      city: city,
    });
    if (!deletedLocation) {
      return res.status(404).json({ message: "Location not found" });
    }
    res.json({ message: "Location deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
