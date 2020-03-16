# 基礎篇 - 重點整理

---

## 第一章 - 原始資料型別

1. JS 內建的建構子如: Boolean、Number.. 所產生出的實例都是物件型別，無法賦值予定義為非物件型別的變數

2. void 在 TS 中通常表示沒有返回值得函數

```ts
function alertName(): void {
  alert('Hello')
}
```

3. 除了返回空值的匿名函數，不要定義任何 void

## 第二章 - 任意值 any

1. 訪問屬性: TS 會辦別你所定義的函數是否有對應的屬性，若沒有，會報錯提示，如：
```ts
var num: number = 222
num.length    // number 型別沒有 length 屬性，報錯
```

2. 若是 any 型別則可以任意訪問屬性，TS 不會做檢查

3. 宣告但未賦值的變數，TS 自動判讀為 any 型別

```ts
// 不會報錯，等同於 var something: any
var something
something = 'seven';
something = 7;
```

## 第三章 - 型別推論

1. 宣告且賦值，但是未定義型別的變數，TS 會做型別推論，將該變數定義為第一次賦值對象的型別，此一情況不可與 2-3 搞混

```ts
var num = 'seven' // 變數 num 被自動定義為 string 型別
num = 7           // 報錯
```

## 第四章 - 聯合型別

1. 聯合型別常見錯誤
```ts
// length 不是 string 和 number 的共有屬性，所以會報錯。
function getLength(something: string | number): number {
  return something.length;  // 報錯
}

// 訪問 string 和 number 的共有屬性是沒問題的：
function getString(something: string | number): string {
  return something.toString();
}
```

## 第五章 - 物件的型別 Interface

1. 任意屬性： 若不確定該物件會有什麼成員，可以新增任意屬性
```ts
interface IPerson {
  name: string,
  age?: number,         // 可有可無的成員
  [key: string]: any;   // key 可以隨意命名
}

// age可有可無，並可新增更多未在 IPerson 定義的屬性和對應型別
var jay: IPerson3= {
  name: 'Jay',
  gender: 'male',
  height: 180,
  weight: 75
}
```

2. 具有任意屬性的 interface 當中的成員的型別必須符合任意屬性所定義的型別
```ts
interface IPerson {
  name: string,
  age?: number,  // 報錯, age 型別必須是 string 或 string 的子集
  [key: string]: string
}
```

3. 唯獨屬性： 有時候我們希望物件中的一些欄位只能在建立的時候被賦值
```ts
interface IPerson {
  readonly id: number,
  name: string,
  age: number
}

var ting: IPerson5 = {
  id: 1,
  name: 'Ting',
  gender: 'male'
}

ting.id = 2    // 報錯
```

## 第六章 - 陣列型別

1. 基本使用
```ts
var arr: number[] = [1, 2, 3, 4, 5]   
var arr: number[] = [1, 2, 3, 4, '5'] // 報錯
arr.push('6') // 報錯
```

2. 泛型為另一種陣列表達方式
```ts
var arr3: Array<number> = [1, 1, 2, 3, 5];
```

3. interface 也可以用來表達陣列，通常用來表示類陣列(array-like)，因為此種方式可以進一步定義索引(key)只能為數字
```ts
interface NumberArray {
  [index: number]: number
}
```

4. 類陣列（Array-like Object）不是陣列型別，比如 arguments

```ts
function sum() {
  let args: number[] = arguments;    // 報錯
}
```

```ts
// 應該這麼做
function sum() {
  let args: {
      [index: number]: number;
      length: number;
      callee: Function;
  } = arguments;
}

// TS 其實已經幫我們內建了給 arguments 使用的 interface
function sum() {
  let args: IArguments = arguments;
}
```

## 第七章 - 函式型別

1. 函式宣告（Function Declaration
```ts
function sum(x: number, y: number): number {
  return x + y
}
```

2. 函式表示式 Function Expression
```ts
var mySum = function(x: number, y:number): number {
  return x + y
}
```

3. 上面的函式表示式只對等號右側的匿名函式進行了型別定義，而等號左邊的 mySum，是透過賦值操作進行型別推論而推斷出來的。如果需要我們手動給 mySum 新增型別，則應該是這樣：

```ts
var mySum3:(x: number, y: number) => number = function(x: number, y: number): number {
  return x + y
}
```

3. 也可以用 interface 定義函式
```js
interface SearchFunc {
  (source: string, subString: string): boolean
}

var mtSearch: SearchFunc = function(source: string, subString: string) {
  return source.search(subString) !== -1
}
```