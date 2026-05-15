async function loadMoods() {
  try {
    const res = await fetch("/api/moods");
    const data = await res.json();

    console.log("moods:", data);

    if (!data || data.length === 0) return;

    //mood chart
    const labels = data.map(d =>
      new Date(d.created_at).toLocaleDateString()
    );

    const moods = data.map(d => Number(d.mood));
    const weather = data.map(d => Number(d.weather));

    const chartCanvas = document.getElementById("chart");

    if (chartCanvas) {
      new Chart(chartCanvas, {
        type: "line",
        data: {
          labels,
          datasets: [
            {
              label: "Mood (1–10)",
              data: moods,
              borderWidth: 2
            },
            {
              label: "Weather (°F)",
              data: weather,
              borderWidth: 2
            }
          ]
        }
      });
    }

    //mood history
    const list = document.getElementById("moodList");

    if (!list) return;

    list.innerHTML = ""; // important reset

    data.slice().reverse().forEach(entry => {
      const card = document.createElement("div");
      card.classList.add("mood-card");

      card.innerHTML = `
        <div class="mood-top">
          <div class="mood-score">😊 Mood: ${entry.mood}/10</div>
          <div class="mood-date">${new Date(entry.created_at).toLocaleString()}</div>
        </div>

        <div class="mood-content">
          <div class="mood-note">
            <strong>Note:</strong>
            <span>${entry.note || "No note added"}</span>
          </div>

          <div class="mood-weather">
            <strong>Weather:</strong>
            <span>${entry.weather}°F</span>
          </div>
        </div>
      `;

      list.appendChild(card);
    });

  } catch (err) {
    console.error("Dashboard error:", err);
  }
}

loadMoods();