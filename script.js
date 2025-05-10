const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Move the "No" button on mouseover
noBtn.addEventListener("mouseover", () => {
    // Randomly position the button within the viewport
    const x = Math.random() * 90; // 90% of the screen width
    const y = Math.random() * 90; // 90% of the screen height
    noBtn.style.setProperty("top", `${y}%`);
    noBtn.style.setProperty("left", `${x}%`);
});

// Alert and spawn confetti on "Yes" button click
yesBtn.addEventListener("click", () => {
    alert("Yay! You love me too!");
    createConfetti();
    spawnHearts();
});

// Create Confetti
function createConfetti() {
    const colors = ['#FF0D00', '#0DC2FF', '#0DFF72', '#F538FF', '#FF8E00'];
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti');
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Randomly position the confetti across the screen
        confettiPiece.style.left = `${Math.random() * 100}vw`;
        confettiPiece.style.animationDuration = `${Math.random() * 2 + 2}s`; // Randomize falling time
        confettiContainer.appendChild(confettiPiece);
    }

    // Remove confetti after 3 seconds
    setTimeout(() => {
        confettiContainer.remove();
    }, 3000); // Remove confetti container after 3 seconds
}

// Spawn hearts
function spawnHearts() {
    // Spawn hearts every 300ms
    const spawnHeart = () => {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        // Random size between 10px to 20px
        const size = Math.random() * 10 + 10; 
        heart.style.width = size + "px";
        heart.style.height = size + "px";
        heart.style.left = Math.random() * 100 + "vw"; // Random horizontal position

        const duration = Math.random() * 3 + 2; // Random animation duration between 2s to 5s
        heart.style.animationDuration = duration + "s";

        document.body.appendChild(heart); // Add to the body directly

        setTimeout(() => {
            heart.remove(); // Remove heart after animation duration
        }, duration * 1000); // Remove heart after it finishes floating
    };

    // Start spawning hearts every 300ms
    const heartInterval = setInterval(spawnHeart, 300);

    // Stop spawning hearts after 5 seconds to avoid overloading the page
    setTimeout(() => {
        clearInterval(heartInterval);
    }, 5000); // Stop after 5 seconds
}

// Fade in the background music
const audio = document.getElementById("bg-music");
audio.volume = 0; // Start silent

let volume = 0;
const fadeIn = setInterval(() => {
    if (volume < 0.5) { // Fade up to 50% volume
        volume += 0.01;
        audio.volume = volume;
    } else {
        clearInterval(fadeIn); // Stop when it reaches 50%
    }
}, 200); // Increase every 200ms

const audio = document.getElementById("bg-music");

audio.addEventListener("canplaythrough", () => {
    console.log("Audio is ready to play!");
});

audio.addEventListener("error", (e) => {
    console.error("Error loading audio:", e);
});