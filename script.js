const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    noBtn.style.setProperty("top", `${y}%`);
    noBtn.style.setProperty("left", `${x}%`);
});

yesBtn.addEventListener("click", () => {
    alert("Yay! You love me too!");
    createConfetti();
});

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
    }, 3000);
}
