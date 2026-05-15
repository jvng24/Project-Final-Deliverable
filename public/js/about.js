document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1");

  let toggled = false;

  if (title) {
    title.addEventListener("click", () => {
      title.textContent = toggled
        ? "About MoodTrack"
        : "MoodTrack helps you understand your emotions 🌤️";

      toggled = !toggled;
    });
  }
});