function getCurrentDate() {
    console.log(new Date().toLocaleTimeString());
}
function startTimer() {
    const intervalId = setInterval(() => {
        getCurrentDate();
    }, 5000);
    setTimeout(() => {
        clearInterval(intervalId);
        console.log('Timer stopped after 1 minute');
    }, 60000);
}
startTimer();
function createGreeter(message) {
    return function () {
        console.log(message);
    };
}
const greetHello = createGreeter('Hello');
const greetGoodbye = createGreeter('Goodbye');
greetHello();
greetGoodbye();
