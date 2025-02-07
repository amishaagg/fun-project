const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    startConfetti();
    
    document.body.innerHTML = `
        <div class="yes-container">
            <h1>Yay! You made Amisha the happiest! ❤️</h1>
            <img src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" alt="Excited GIF">
            <p>Happy Valentine's Day! 🎉</p>
            <p class="love-note">"Dear Ashutosh, thanks for always being there for me!" 💖</p>
        </div>
    `;
    const audio = new Audio('romantic_song.mp3');
    audio.play();
}

function startConfetti() {
    const duration = 5 * 1000; // Confetti falls for 5 seconds
    const animationEnd = Date.now() + duration;
    const colors = ["#ff0000", "#ff69b4", "#ffcc00", "#00ffcc"];

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < animationEnd) {
            requestAnimationFrame(frame);
        }
    })();
}

function createFloatingHearts() {
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";
        document.body.appendChild(heart);
    }
}

window.onload = createFloatingHearts;

function updateCountdown() {
    const valentineDate = new Date("February 14, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = valentineDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    
    document.getElementById("countdown").innerText = `Valentine’s Day is in ${days} days! ❤️`;
}

// Run countdown on page load
setInterval(updateCountdown, 1000);
updateCountdown();


