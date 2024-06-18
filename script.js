const flashingSquare = document.getElementById('flashing-square');
let count = 0;

function flashSquare() {
    count++;
    
    if (count < 3) {
        flashingSquare.style.animation = "none";
        setTimeout(() => {
            flashingSquare.style.animation = "flash 1s infinite";
            flashSquare();
        }, 1000); // Мигание каждую секунду
    }
}

flashSquare();
