const noBtn = document.getElementById("no-btn");

noBtn.addEventListener("mouseover", function() {
    const x = Math.random() * window.innerWidth - 100;
    const y = Math.random() * window.innerHeight - 50;
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

document.getElementById("yes-btn").addEventListener("click", function() {
    alert("Yay! I love you! 💖");
});
