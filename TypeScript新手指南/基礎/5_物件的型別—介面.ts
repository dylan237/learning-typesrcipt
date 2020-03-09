/* 物件的型別——介面 */
// https://willh.gitbook.io/typescript-tutorial/basics/type-of-object-interfaces

// 在 TypeScript 中，我們使用介面（Interfaces）來定義物件的型別。

/* 一、什麼是介面 */
// 在面嚮物件語言中，介面（Interfaces）是一個很重要的概念，它是對行為的抽象，而具體如何行動需要由類別（classes）去實現（implement）。
// TypeScript 中的介面是一個非常靈活的概念，除了可用於對類別的一部分行為進行抽象以外，也常用於對「物件的形狀（Shape）」進行描述。

/* 二、簡單的例子 */
interface IPerson {
  name: string,
  age: number
}

var dylan: IPerson = {
  name: 'Dylan',
  age: 18,
}
// 上面的例子中，我們定義了一個介面 Person，接著定義了一個變數 dylan，它的型別是 Person。這樣，我們就約束了 tom 的屬性及屬性的型別必須和介面 Person 一致。

// 定義的變數比介面多了一些屬性是不允許的：
var tom: IPerson = {
  name: 'tom',
  age: 18,
  hobby: 'runing'  // 報錯
}

// 定義的變數比介面少了一些屬性是不允許的：
var john: IPerson = { // 報錯
  name: 'john',
}

/* 二、可選屬性 */

// 有時我們希望不要完全匹配一個形狀，那麼可以用可選屬性：
interface IPerson2 {
  name: string,
  age?: number
}

var sam: IPerson2 = {
  name: 'Sam'
}

/* 三、任意屬性 */

// 有時候我們希望一個介面允許有任意的屬性，可以使用如下方式：
interface IPerson3 {
  name: string,
  age?: number,
  [key: string]: any;   // key 可以隨意命名
}

var jay: IPerson3 = {
  name: 'Jay',
  gender: 'male',
  yo: 'yo'
}
// 使用 [key: string] 定義了任意屬性取 string 型別的值。

// 注意: 一旦定義了任意屬性，那麼確定屬性和可選屬性的型別都必須是它的型別的子集, 亦即 name 及 age 都必須是 key 所指定的型別
// ** 子集： 如 null 和 undefined 是所有屬性的子集 **

interface IPerson4 {
  name: string,
  age?: number,  // 報錯, age 型別必須是 string 或 string 的子集
  [propName: string]: string
}

/* 只讀屬性 */

// 有時候我們希望物件中的一些欄位只能在建立的時候被賦值，那麼可以用 readonly 定義只讀屬性：
interface IPerson5 {
  readonly id: number,
  name: string,
  age?: number,
  [propName: string]: any
}

var ting: IPerson5 = {
  id: 1,
  name: 'Ting',
  gender: 'male'
}

ting.name = '222'
ting.id = 2 // 報錯