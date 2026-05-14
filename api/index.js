const express = require("express");
const cors = require("cors");
const path = require("path");

const moodRoutes = require("../server/routes/moods");
const weatherRoutes = require("../server/routes/weather");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/moods", moodRoutes);
app.use("/api/weather", weatherRoutes);

// frontend
app.use(express.static(path.join(__dirname, "../client")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/home.html"));
});

module.exports = app;