/**
 * 实现数组读负数
 */
function createArray(arr) {
  let handler = {
    get(target, propKey, receiver) {
      let index = Number(propKey)
      if(index<0){
        propKey = String(index + target.length)
      }
      return Reflect.get(target,propKey,receiver)
    },
  };
  return new Proxy(arr, handler);
}
