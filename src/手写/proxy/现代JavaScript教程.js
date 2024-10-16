/**
 * https://zh.javascript.info/proxy
 */

let target = {};
let proxy = new Proxy(target, {});

let numbers = [];

numbers = new Proxy(numbers, {
  set(target, prop, val) {
    if(typeof val === 'number'){
      target[prop] = val
      return true
    }
    return false
  },
});

numbers.push('2')
