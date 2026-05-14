require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const moodRoutes = require("./routes/moods");
const weatherRoutes = require("./routes/weather");

const app = express();

app.use(cors());
app.use(express.json());

// serve frontend
app.use(express.static(path.join(__dirname, "../client")));

// API routes
app.use("/api/moods", moodRoutes);
app.use("/api/weather", weatherRoutes);

// homepage route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/home.html"));
});

// IMPORTANT: no app.listen here
module.exports = app;