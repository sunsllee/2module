const concat = (a, b) => `${a}${b}`;
console.log('Вариант 1:', concat(11, 13));
const numberConst = 666;
let stringLet = "MurMurMur";
const booleanConst = true;
let arrayLet = [111, 222, 333, 444];
const nullConst = null;
let undefinedLet = undefined;
const objectConst = { key: "WiWiWi" };
let dateLet = new Date();
const data = {
    id: 1,
    name: "Василий",
};
const jsonString = JSON.stringify(data);
console.log('Результат преобразования:');
console.log(jsonString);
