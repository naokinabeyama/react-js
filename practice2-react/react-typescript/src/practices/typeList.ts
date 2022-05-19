/** TypeScript */

// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字
let str: string = "A";

// Array 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple 
let tuple: [number, string] = [0, "A"];

// any どんな型でも大丈夫　*基本使わない*
let any1: any = false;

// void 関数で何も返却しない時 *typescriptは自動でvoid返してくれる為この場合記述しなくても良い*
const func1 = (): void => {
    const test = "TEST";
}

// null
let null1: null = null;

// undefind *値が代入されていない為、値がないことを示す*
let undefind1: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number, name: string } = { id: 0, name: "A" };






export { }
