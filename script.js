const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Move the "No" button on mouseover
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    noBtn.style.setProperty("top", `${y}%`);
    noBtn.style.setProperty("left", `${x}%`);
});

// Alert and spawn confetti on "Yes" button click
yesBtn.addEventListener("click", () => {
    alert("Yay! You love me too!");
    createConfetti();
});

// Create Confetti
function createConfetti() {
    const colors = ['#FF0D00', '#0DC2FF', '#0DFF72', '#F538FF', '#FF8E00'];
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiContainer.appendChild(confettiPiece);
    }

    setTimeout(() => {
        confettiContainer.remove();
    }, 3000); // Remove after 3 seconds
}

// Spawn hearts every 300ms
function spawnHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    const size = Math.random() * 10 + 10; // 10px to 20px
    heart.style.width = size + "px";
    heart.style.height = size + "px";
    heart.style.left = Math.random() * 100 + "vw";

    const duration = Math.random() * 3 + 2; // 2s to 5s
    heart.style.animationDuration = duration + "s";

    document.getElementById("heart-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(spawnHeart, 300); // Spawn hearts every 300ms

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
