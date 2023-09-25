let storedIntervalId = '';
const counter = document.getElementById('counter');

const startTimer = () => {
    const intervalID = setInterval(() => {
        storedIntervalId = intervalID;
        let num = parseInt(counter.innerText);
        num++;
        counter.innerText = num;

    }, 100)
}
const stopTimer = () => {
    // console.log(storedIntervalId);
    clearInterval(storedIntervalId);
}

const resetTimer = () => {
    clearInterval(storedIntervalId);
    counter.innerText = 0;
}
// startTimer();
// stopTimer();
// resetTimer();