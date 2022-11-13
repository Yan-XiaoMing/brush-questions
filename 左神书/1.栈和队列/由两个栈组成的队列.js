/**
 * 跳过
 */

// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void (async function () {
//   const stack = [];
//   // Write your code here
//   const n = Number(await readline());
//   for (let i = 0; i < n; i++) {
//     const inputStr = await readline();
//     const actionArr = inputStr.split(" ");
//     if (actionArr.length > 1) {
//       const [action, numberStr] = actionArr;
//       const number = Number(numberStr);
//       stack.push(number);
//       if (minStack.length) {
//         const top = minStack[minStack.length - 1];
//         if (top > number) {
//           minStack.push(number);
//         }
//       } else {
//         minStack.push(number);
//       }
//     }
//     if (actionArr.length === 1) {
//       const [action] = actionArr;
//       if (action === "peek") {
//         console.log(minStack[minStack.length - 1]);
//       }
//       if (action === "poll") {
//         const stackPopItem = stack.pop();
//         if (stackPopItem === minStack[minStack.length - 1]) {
//           minStack.pop();
//         }
//       }
//     }
//   }
// })();
