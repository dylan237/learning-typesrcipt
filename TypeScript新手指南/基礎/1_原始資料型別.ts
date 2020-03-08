/* 
JavaScript 的型別分為兩種：
  - 原始資料型別（Primitive data types）和物件型別（Object types）。
  - 原始資料型別包括：布林值、數值、字串、null、undefined 以及 ES6 中的新型別 Symbol。
本節主要介紹前五種原始資料型別在 TypeScript 中的應用。 
*/
// https://willh.gitbook.io/typescript-tutorial/basics/primitive-data-types

/* 一、Boolean */
var isDone: boolean = false

// 注意：使用Boolean 創造的物件不屬於原始型別的布林值, 事實上 new Boolean() 返回的是一個 Boolean 物件
var createdByNewBoolean: boolean = new Boolean(1) // 報錯

// 直接呼叫 Boolean 返回的是一個 boolean 型別
var createdByNewBoolean: boolean = Boolean(1)

// 在 TypeScript 中，boolean 是 JavaScript 中的基本型別，而 Boolean 是 JavaScript 中的建構函式。其他基本型別（除了 null 和 undefined）一樣，不再贅述。

/* 二、空值 */

// JavaScript 沒有空值（Void）的概念，在 TypeScript 中，可以用 void 表示沒有任何返回值的函式：
function alertName(): void {
  alert('Hello')
}

// 宣告一個 void 型別的變數沒有什麼用，因為你只能將它賦值為 undefined 和 null：
var unusable: void = undefined;
var unusable: void = null;

/* 三、Null 和 Undefined */

// 在 TypeScript 中，可以使用 null 和 undefined 來定義這兩個原始資料型別：
var u: undefined = undefined
var n: null = null

// 與 void 的區別是，『 undefined 和 null 是所有型別的子型別 』。也就是說 undefined 型別的變數，可以賦值給 number 型別的變數：
// 這樣不會報錯
var num: number = u;
var num: number = n;

// 而 void 型別的變數不能賦值給 number 型別的變數：
var u2: void
var num: number = u2