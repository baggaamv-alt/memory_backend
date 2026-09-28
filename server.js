require("dotenv").config();

const express = require("express");
const cloudinary = require("./config/cloudinary");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Memory App Backend is running!");
});

app.get("/cloudinary-test", async (req, res) => {
  try {
    const result = await cloudinary.api.ping();

    res.json({
      success: true,
      message: "Cloudinary connected successfully!",
      status: result.status,
    });
  } catch (error) {
    console.error("Cloudinary connection failed:", error.message);

    res.status(500).json({
      success: false,
      message: "Cloudinary connection failed.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});