/**
 *  const,let等の変数宣言 ============================
 */

// // var 変数は割となんでも出来る
// var val1 = "var変数";
// console.log(val1);

// // var 変数は上書き可能
// val1 = "var 変数は上書き可能"
// console.log(val1);

// // var 変数は再宣言可能
// var val1 = "var 変数は再宣言可能";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // let 変数は上書き可能
// val2 = "let 変数は上書き可能";
// console.log(val2);

// // let 変数は再宣言が出来ない
// let val2 = "let 変数は再宣言が出来ない";

// const val3 = "const変数";
// console.log(val3);

// const 変数は上書きが出来ない
// val3 = "const 変数は上書きが出来ない";

// const 変数は再宣言が出来ない
// const val3 = "const 変数は再宣言が出来ない";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28,
// };
// console.log(val4);

// val4.name = "jak";
// val4.address = "広島";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey")
// console.log(val5);

/**
 *  テンプレート文字列 ============================
 */

// const name = "じゃけぇ";
// const age = 28;
// //「私の名前はじゃけぇです。年齢は28歳です。」

// // 従来の方法
// const message1 = "1私の名前は" + name　+ "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `2私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 *  アロー関数 ============================
 */

// 従来の方法
//パターン➀
// function func1(str) {
//   return str;
// };
//パターン➁
// const func1 = function() {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));
// const func2a = (str) => str;
// console.log(func2a("func2aです"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));
// const func3a = (num1, num2) => num1 + num2;
// console.log(func3a(10, 20));

/**
 *  分割代入 ============================
 */

//  const myProfile = {
//    name: "じゃけぇ",
//    age: 28,
//  }

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message2);

// const myProfile = ['じゃけぇ', 28]

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(message3);

// const [name, age] = myProfile
// const message4 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message4);

/**
 *  デフォルト値 ============================
 */

//  const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん`);
//  sayHello();

/**
 *  スプレッド構文 ... ============================
 */

// 配列の展開
const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]) // ↓両方同じことをしている
// sumFunc(...arr1)          // ↑両方同じことをしている

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);
