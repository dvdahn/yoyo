const audio = document.getElementById("bg-music");
playBtn.addEventListener("click", () => {
  audio.play().catch(err => console.error("Autoplay issue:", err));