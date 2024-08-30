let startStopButton = document.getElementById('startStop');
let resetButton = document.getElementById('reset');
let display = document.getElementById('display');

let timer;
let running = false;
let elapsedTime = 0;

function formatTime(milliseconds) {
    let totalSeconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let ms = milliseconds % 1000;

    return (
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds + ":" +
        (ms < 100 ? "0" : "") + (ms < 10 ? "0" : "") + ms
    );
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

startStopButton.addEventListener('click', function () {
    if (running) {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    } else {
        let startTime = Date.now() - elapsedTime;
        timer = setInterval(function () {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);
        startStopButton.textContent = 'Stop';
    }
    running = !running;
});

resetButton.addEventListener('click', function () {
    clearInterval(timer);
    running = false;
    elapsedTime = 0;
    updateDisplay();
    startStopButton.textContent = 'Start';
});

updateDisplay();
