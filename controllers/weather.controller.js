import { getTempOfCity } from "../services/weather.service.js";

export const getWeather = async (req, res) => {
  try {
    const { city } = req.params;
    const { temp } = await getTempOfCity(city);
    res.json({ temp: Math.round(temp) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTime = async (req, res) => {
  try {
    const { city } = req.params;
    const { timezone } = await getTempOfCity(city);

    const utcTime = new Date(Date.now() + timezone * 1000);
    const hours = String(utcTime.getUTCHours()).padStart(2, "0");
    const minutes = String(utcTime.getUTCMinutes()).padStart(2, "0");
    const seconds = String(utcTime.getUTCSeconds()).padStart(2, "0");

    res.json({ time: `${hours}:${minutes}:${seconds}` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
