declare const concat: (a: number, b: number) => string;
declare const numberConst: number;
declare let stringLet: string;
declare const booleanConst: boolean;
declare let arrayLet: number[];
declare const nullConst: null;
declare let undefinedLet: undefined;
declare const objectConst: object;
declare let dateLet: Date;
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    name: string;
    surname?: string;
}
declare const data: ToJsonStringify;
declare const jsonString: string;
