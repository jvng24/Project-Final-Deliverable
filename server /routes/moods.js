const supabase = require("../server/supabase");

module.exports = async (req, res) => {
  if (req.method === "GET") {
    const { data, error } = await supabase
      .from("moods")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) return res.status(500).json(error);
    return res.json(data);
  }

  if (req.method === "POST") {
    const { mood, note, weather } = req.body;

    if (mood < 1 || mood > 10) {
      return res.status(400).json({ error: "Mood must be 1–10" });
    }

    const { data, error } = await supabase
      .from("moods")
      .insert([{ mood, note, weather }])
      .select();

    if (error) return res.status(500).json(error);
    return res.json(data);
  }

  res.status(405).json({ error: "Method not allowed" });
};