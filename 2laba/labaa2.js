var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arr = [11, 22, 2389, 11, 13, 6666];
var matrix = [
    [22, 2, 10],
    [81, -77, 64],
    [7, 5, 44]
];
var tuplelele = [6, 10, 36];
function getMax(array) {
    return Math.max.apply(Math, array);
}
console.log(getMax(arr));
function checkNegative(matrix) {
    return matrix.some(function (row) { return row.some(function (num) { return num < 0; }); });
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
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
function getInfo(pet) {
    console.log({
        name: pet.name, age: pet.age, speech: pet.speak()
    });
}
var kitik = new Cat();
getInfo(kitik);
var basketballProduct = {
    ball: Balls.Basketball,
    amount: 50,
    brand: "Wilson"
};
console.log(JSON.stringify(basketballProduct, null, 2));
