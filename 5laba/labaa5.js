function getCurrentDate() {
    console.log(new Date().toLocaleTimeString());
}
function startTimer() {
    var intervalId = setInterval(function () {
        getCurrentDate();
    }, 5000);
    setTimeout(function () {
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
var greetHello = createGreeter('Hello');
var greetGoodbye = createGreeter('Goodbye');
greetHello();
greetGoodbye();
