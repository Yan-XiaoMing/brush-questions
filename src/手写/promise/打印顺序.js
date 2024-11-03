/**
 * baidu 面经
 */

const baiduPromise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
    console.log("timmer 1");
  }, 1000);
  console.log("promise1");
});

const baiduPromise2 = baiduPromise1.then(() => {
  throw new Error("error");
});

console.log(baiduPromise1, "baiduPromise1");
console.log(baiduPromise2, "baiduPromise2");

setTimeout(() => {
  console.log("timer 2");
  console.log(baiduPromise1, "baiduPromise1 - setTimeout");
  console.log(baiduPromise2, "baiduPromise2 - setTimeout");
}, 2000);
