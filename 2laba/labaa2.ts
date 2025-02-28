let arr: number[] = [11, 22, 2389, 11, 13, 6666];
const matrix: number[][] = [
    [22, 2, 10],
    [81, -77, 64],
    [7, 5, 44]
];
type NumberTuple = [number, number, number];
const tuplelele: NumberTuple = [6, 10, 36];


function getMax(array: number[]): number {
    return Math.max(...array);
}
console.log(getMax(arr));

function checkNegative(matrix: number[][]): boolean {
    return matrix.some(row => row.some(num => num < 0));
}
console.log(checkNegative(matrix));

function sumNumbers(tuple: NumberTuple): number {
    return tuple[0] + tuple[1] + tuple[2];
}
console.log(sumNumbers(tuplelele));

enum Balls {
    Basketball = "баскетбольный",
    Volleyball = "волейбольный",
    Football = "футбольный",
}
console.log(Balls.Basketball);

class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}
    
class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}
    
class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

function getInfo<T extends Pet>(pet: T): void {
    console.log({
        name: pet.name, age: pet.age, speech: pet.speak()
    });
}
const kitik = new Cat();
getInfo(kitik);

interface Product {
    ball: Balls;
    amount: number;
    brand: string;
}

const basketballProduct: Product = {
    ball: Balls.Basketball,
    amount: 50,
    brand: "Wilson"
};

console.log(JSON.stringify(basketballProduct, null, 2));