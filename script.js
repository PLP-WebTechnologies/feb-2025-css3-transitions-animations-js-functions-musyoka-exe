document.addEventListener("DOMContentLoaded", function () {

  // ===== THEME TOGGLE ===== //
  const themeBtn = document.getElementById("themeBtn");
  const body = document.body;

  // Check saved preference
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    themeBtn.textContent = "Switch to Light Mode";
  }

  themeBtn.addEventListener("click", function () {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      themeBtn.textContent = "Switch to Light Mode";
    } else {
      localStorage.setItem("theme", "light");
      themeBtn.textContent = "Switch to Dark Mode";
    }
  });

  // ===== ANIMATION TRIGGER ===== //
  const animateBtn = document.getElementById("animateBtn");
  const animatedBox = document.getElementById("animatedBox");

  animateBtn.addEventListener("click", function () {
    animatedBox.classList.remove("bounce");
    void animatedBox.offsetWidth; // Force reflow to restart animation
    animatedBox.classList.add("bounce");
  });

  // ===== LOCAL STORAGE MESSAGE ===== //
  const saveMessageBtn = document.getElementById("saveMessageBtn");
  const userMessageInput = document.getElementById("userMessage");
  const savedMessageDisplay = document.getElementById("savedMessageDisplay");

  // Load saved message on load
  const savedMessage = localStorage.getItem("userMessage");
  if (savedMessage) {
    savedMessageDisplay.textContent = "Saved Message: " + savedMessage;
  }

  saveMessageBtn.addEventListener("click", function () {
    const message = userMessageInput.value.trim();
    if (message) {
      localStorage.setItem("userMessage", message);
      savedMessageDisplay.textContent = "Saved Message: " + message;
    }
  });

});
