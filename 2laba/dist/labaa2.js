let arr = [11, 22, 2389, 11, 13, 6666];
const matrix = [
    [22, 2, 10],
    [81, -77, 64],
    [7, 5, 44]
];
const tuplelele = [6, 10, 36];
function getMax(array) {
    return Math.max(...array);
}
console.log(getMax(arr));
function checkNegative(matrix) {
    return matrix.some(row => row.some(num => num < 0));
}
console.log(checkNegative(matrix));
function sumNumbers(tuple) {
    return tuple[0] + tuple[1] + tuple[2];
}
console.log(sumNumbers(tuplelele));
var Balls;
(function (Balls) {
    Balls["Basketball"] = "\u0431\u0430\u0441\u043A\u0435\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0439";
    Balls["Volleyball"] = "\u0432\u043E\u043B\u0435\u0439\u0431\u043E\u043B\u044C\u043D\u044B\u0439";
    Balls["Football"] = "\u0444\u0443\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0439";
})(Balls || (Balls = {}));
console.log(Balls.Basketball);
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function getInfo(pet) {
    console.log({
        name: pet.name, age: pet.age, speech: pet.speak()
    });
}
const kitik = new Cat();
getInfo(kitik);
const basketballProduct = {
    ball: Balls.Basketball,
    amount: 50,
    brand: "Wilson"
};
console.log(JSON.stringify(basketballProduct, null, 2));
