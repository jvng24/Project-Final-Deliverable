document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1");

  if (title) {
    title.addEventListener("click", () => {
      title.textContent = "Need Help? You're in the right place 🌤️";
    });
  }

  const steps = document.querySelectorAll("ol li");

  steps.forEach(step => {
    step.addEventListener("mouseenter", () => {
      step.style.backgroundColor = "#f0f8ff";
    });

    step.addEventListener("mouseleave", () => {
      step.style.backgroundColor = "";
    });
  });
});