import { User } from "../models/User.js";

export const getMe = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const updateEmail = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });

    const user = await User.findByIdAndUpdate(
      req.userId,
      { email },
      { new: true }
    ).select("name email");

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const updateUsername = async (req, res) => {
  try {
    const { username } = req.body;
    if (!username)
      return res.status(400).json({ error: "Username is required" });

    const user = await User.findByIdAndUpdate(
      req.userId,
      { username },
      { new: true }
    ).select("name email");

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const deleteMe = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.userId);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
