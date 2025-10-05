function addConfettiOnClick(element) {
    element.addEventListener('click', function () {
        // Canvas erstellen
        const canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        const confettiCount = 300;
        const confettiColors = ['#ff0', '#0f0', '#00f', '#f0f', '#0ff', '#f00'];
        const confettis = [];

        // Konfetti erstellen
        for (let i = 0; i < confettiCount; i++) {
            confettis.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                r: Math.random() * 5 + 2,
                d: Math.random() * confettiCount,
                color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
                tilt: Math.random() * 10 - 5
            });
        }

        // Animationsschleife
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            confettis.forEach((confetti) => {
                ctx.beginPath();
                ctx.arc(confetti.x, confetti.y, confetti.r, 0, Math.PI * 2, false);
                ctx.fillStyle = confetti.color;
                ctx.fill();
            });
            update();
        }

        // Update Positionen der Konfetti
        function update() {
            confettis.forEach((confetti) => {
                confetti.y += 2 + Math.cos(confetti.d) * 2;
                confetti.x += Math.sin(confetti.d);
                confetti.tilt += Math.random() * 0.1;
                if (confetti.y > canvas.height) {
                    confetti.y = -10;
                    confetti.x = Math.random() * canvas.width;
                }
            });
            requestAnimationFrame(draw);
        }

        draw();

        // Canvas nach 3 Sekunden entfernen
        setTimeout(() => {
            document.body.removeChild(canvas);
        }, 3000);
    });
}

// Beispielverwendung
const button = document.body;
addConfettiOnClick(button);