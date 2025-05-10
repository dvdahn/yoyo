const playBtn = document.getElementById("playBtn");
const audio = document.getElementById("bg-music");
const mainContent = document.getElementById("main-content");
const bubbleContainer = document.getElementById("bubble-container");

playBtn.addEventListener("click", () => {
  audio.play().catch(err => console.error("Autoplay issue:", err));

  // Trigger bubbles
  for (let i = 0; i < 20; i++) {
    createBubble();
  }

  // Hide play button and show main content
  playBtn.style.display = "none";
  setTimeout(() => {
    mainContent.classList.remove("hidden");
  }, 800); // show after pop animation
});

function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.style.left = `${Math.random() * 100}vw`;
  bubble.style.top = `${Math.random() * 100}vh`;
  bubbleContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 1000);
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", moveNoButton);

function moveNoButton() {
  const container = document.querySelector(".container");
  const containerRect = container.getBoundingClientRect();

  const maxX = containerRect.width - noBtn.offsetWidth;
  const maxY = containerRect.height - noBtn.offsetHeight;

  const randX = Math.floor(Math.random() * maxX);
  const randY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randX}px`;
  noBtn.style.top = `${randY}px`;
}

