// /* 一、語法 */

// // `<型別>值` 或是 值 as 型別

// // 在 tsx 語法（React 的 jsx 語法的 ts 版）中必須用後一種。

// /* 二、例子：將一個聯合型別的變數指定為一個更加具體的型別 */
// // 之前提到過，當 TypeScript 不確定一個聯合型別的變數到底是哪個型別的時候，我們只能訪問此聯合型別的所有型別裡共有的屬性或方法：

// function getLenth(something: string | number): number {
//   return something.length // 報錯
// }

// // index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
// //   Property 'length' does not exist on type 'number'.

// // 而有時候，我們確實需要在還不確定型別的時候就訪問其中一個型別的屬性或方法，比如：

// function getLength(something: string | number): number {
//   if (something.length) {        // 報錯
//       return something.length;
//   } else {
//       return something.toString().length;
//   }
// }

// 上例中，獲取 something.length 的時候會報錯。
// 此時可以使用型別斷言，將 something 斷言成 string

function getLength2(something: string | number): number {
  if ((something as string).length) {
    return (something as string).length
  } else {
    return something.toString().length
  }
}

// 或是

function getLength3(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length
  } else {
    return something.toString().length
  }
}

// 型別斷言不是型別轉換，斷言成一個聯合型別中不存在的型別是不允許的：

function toBoolean(something: string | number): boolean {
  return <boolean>something // 報錯
}
