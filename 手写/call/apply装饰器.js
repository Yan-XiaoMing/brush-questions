/**
 * 创建一个装饰器 spy(func)，它应该返回一个包装器，该包装器将所有对函数的调用
 * 存在其 calls 属性中。
 * 每个调用都保存为一个参数数组。
 */

function work(a, b) {
  console.log(a + b); // work 是一个任意的函数或方法
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9
for (let args of work.calls) {
  console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}

function spy(fn) {
  function wrapper(...args) {
    if (wrapper.calls) {
      wrapper.calls.push([...args]);
    }

    return fn(...args);
  }
  wrapper.calls = [];
  return wrapper;
}

/**
 * 延时装饰器
 * 创建一个装饰器 delay(f, ms)，该装饰器将 f 的每次调用延时 ms 毫秒。
 */

function f(x) {
  console.log(x);
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // 在 1000ms 后显示 "test"
f1500("test"); // 在 1500ms 后显示 "test"

function delay(f, ms) {
  function wrapper() {
    setTimeout(() => {
      f.apply(this, arguments);
    }, ms);
  }
  return wrapper;
}

/**
 * 防抖装饰器
 */
let f = debounce(console.log, 1000);

f("a");
setTimeout(() => f("b"), 200);
setTimeout(() => f("c"), 500);

function debounce(fn, ms) {
  let time = null;
  return function (...args) {
    let _this = this
    if (time) {
      clearTimeout(time);
    }
    time = setTimeout(function () {
      fn.apply(_this,args);
    }, ms);
  };
}

/**
 * 节流装饰器
 */

function throttle(fn,ms){
  let timer = null;
  return function(...args){
    if(!timer){
      timer = setTimeout(()=>{
        fn.apply(this,args)
        clearTimeout(timer)
      },ms)
    }
  }
}
