const express = require("express");
const cors = require("cors");
const path = require("path");

const moodRoutes = require("../server/routes/moods");
const weatherRoutes = require("../server/routes/weather");

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/moods", moodRoutes);
app.use("/api/weather", weatherRoutes);

// serve static frontend
const clientPath = path.join(process.cwd(), "client");

app.use(express.static(clientPath));

// homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(clientPath, "home.html"));
});

module.exports = app;