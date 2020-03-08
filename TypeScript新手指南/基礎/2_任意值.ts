/* 任意值（Any）用來表示允許賦值為任意型別。 */
// https://willh.gitbook.io/typescript-tutorial/basics/any

/* 一、什麼是任意值型別 */

// 如果是一個普通型別，在賦值過程中改變型別是不被允許的：
var num: number = 10 
num = '10' // 報錯

// 但如果是 any 型別，則允許被賦值為任意型別。
var num2: any = 10
num2 = '10'

/* 任意值的屬性和方法 */

// 在任意值上訪問任何屬性都是允許的：
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

// 也允許呼叫任何方法：
var anyThing2: any = 'Tom'
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');

// 可以認為，宣告一個變數為任意值之後，對它的任何操作，返回的內容的型別都是任意值。


/* 二、未宣告型別的變數 */
var something
something = 'seven';
something = 7;

something.setName('Tom');
// 等價於
var something: any;
something = 'seven';
something = 7;

something.setName('Tom');