require("dotenv").config();

const express = require("express");
const cors = require("cors"); 
const path = require("path"); 

const moodRoutes = require("./routes/moods");
const weatherRoutes = required("./routes/weather"); 

const app = express(); 

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client")));

app.use("/api/moods", moodRoutes);
app.use("/api/weather", weatherRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/home.html"));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});