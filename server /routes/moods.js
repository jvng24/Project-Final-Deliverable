const express = require("express");
const router = express.Router();
const supabase = require("../supabase");

// GET all moods
router.get("/", async (req, res) => {
  const { data, error } = await supabase
    .from("moods")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) return res.status(500).json(error);
  res.json(data);
});

// POST mood
router.post("/", async (req, res) => {
  const { mood, note, weather } = req.body;

  // validation
  if (mood < 1 || mood > 10) {
    return res.status(400).json({ error: "Mood must be 1–10" });
  }

  const { data, error } = await supabase
    .from("moods")
    .insert([{ mood, note, weather }])
    .select();

  if (error) return res.status(500).json(error);
  res.json(data);
});

module.exports = router;