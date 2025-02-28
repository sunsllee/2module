const concat = (a: number, b: number): string => `${a}${b}`;
console.log('Вариант 1:', concat(11, 13));

const numberConst: number = 666;
let stringLet: string = "MurMurMur";
const booleanConst: boolean = true;
let arrayLet: number[] = [111, 222, 333, 444];
const nullConst: null = null;
let undefinedLet: undefined = undefined;
const objectConst: object = { key: "WiWiWi" };
let dateLet: Date = new Date();

interface Entity {
    id: number;
}

interface ToJsonStringify extends Entity {
    name: string;
    surname?: string;
}

const data: ToJsonStringify = {
    id: 1,
    name: "Василий",
}

const jsonString = JSON.stringify(data);
console.log('Результат преобразования:');
console.log(jsonString);