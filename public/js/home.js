document.addEventListener("DOMContentLoaded", () => {
  console.log("home.js loaded");

  const form = document.getElementById("moodForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

        const mood = Number(document.getElementById("mood").value);
        const note = document.getElementById("note").value;

    // enforce 1–10 rule
    if (mood < 1 || mood > 10) {
      alert("Please enter a mood rating between 1 and 10.");
      return;
    }

    try {
      // get weather
      const weatherRes = await fetch("/api/weather");
      const weatherData = await weatherRes.json();

      const weather = weatherData.temperature;

      // save mood
      await fetch("/api/moods", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mood, note, weather })
      });

      alert("Mood saved!");
      form.reset();

    } catch (err) {
      console.error("Save mood error:", err);
    }
  });
});

