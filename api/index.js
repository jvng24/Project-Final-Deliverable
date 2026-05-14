require("dotenv").config();

const express = require("express");
const cors = require("cors");

const moodRoutes = require("../server/routes/moods");
const weatherRoutes = require("../server/routes/weather");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/moods", moodRoutes);
app.use("/api/weather", weatherRoutes);

module.exports = app;