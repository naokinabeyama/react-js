// var val1 = "var変数";

// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";

// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数の再宣言";
// console.log(val1);




// let val2 = "let変数";
// console.log(val2);

// // let変数は上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // let変数は再宣言不可能
// let val2 = "let変数の再宣言";
// console.log(val2);





// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// val3 = "const上書き";
// console.log(val3);

// // const変数再宣言不可
// const val3 = "const変数再宣言"





// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//     name: "あいうえ",
//     age: 20,
// };
// val4.name = "aiue";
// val4.address = "Hiroshima"
// console.log(val4);





// constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5)





// テンプレート文字列
// const name = "田中";
// const age = 20;

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です";

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;

// console.log(message2);






// アロー関数

// 従来の関数
// function func1(str) {
//     return str;
// }
// console.log(func1("こんにちは"));

// アロー関数
// const func2 = (str) => {
//     return str
// };
// // {},return省略も可
// const func3 = (str) => str;
// console.log(func2("こんばんは"));
// console.log(func3("おはよう"));


// const func4 = (num1, num2) => num1 + num2;
// console.log(func4(3, 7));






// 分割代入

// const myProfile = {
//     name: "田中",
//     age: 20,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`
// console.log(message2);


// const myProfile = ["佐藤", 22];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(message3)

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message4)






// デフォルト値、引数など
// const sayHello = (name = "名無し") => console.log(`こんにちは!${name}さん!`);
// sayHello();






// スプレッド構文 ...

// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);


// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);


// 配列のコピー
// const arr4 = [20, 30];
// const arr5 = [40, 50];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);






//mapやfilterを使った配列の処理
// const nameArr = ["田中", "佐藤", "山田"];

// 従来
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(`${index + 1}番目は${nameArr[index]}です。`)
// }

// const nameArr2 = nameArr.map((name) => {
//     return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));


// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 === 1;
// });
// console.log(newNumArr);


// const newNameArr = nameArr.map((name) => {
//     if (name === "田中") {
//         return name
//     } else {
//         return `${name}さん`
//     }
// });
// console.log(newNameArr)






// 三項演算子

// 条件 ? trueの時 : falseの時
// const val = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を設定してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//     return num1 + num2 > 100 ? "100を超えています" : "許容範囲です";
// }
// console.log(checkSum(57, 2))






// 論理演算子の本当の意味

// 一般的
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//     console.log("1か2はtrueになります");
// }

// if (flag1 && flag2) {
//     console.log("1も2もtrueになります");
// }


// || は左側がfalseなら右を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

// && は左側がtrueなら右を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
















