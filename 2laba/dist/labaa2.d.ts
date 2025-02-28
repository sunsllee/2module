declare let arr: number[];
declare const matrix: number[][];
type NumberTuple = [number, number, number];
declare const tuplelele: NumberTuple;
declare function getMax(array: number[]): number;
declare function checkNegative(matrix: number[][]): boolean;
declare function sumNumbers(tuple: NumberTuple): number;
declare enum Balls {
    Basketball = "\u0431\u0430\u0441\u043A\u0435\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0439",
    Volleyball = "\u0432\u043E\u043B\u0435\u0439\u0431\u043E\u043B\u044C\u043D\u044B\u0439",
    Football = "\u0444\u0443\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0439"
}
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare function getInfo<T extends Pet>(pet: T): void;
declare const kitik: Cat;
interface Product {
    ball: Balls;
    amount: number;
    brand: string;
}
declare const basketballProduct: Product;
