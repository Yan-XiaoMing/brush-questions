/**
 * curry
 * 接收一部分参数,返回一个函数接收剩余参数,接收足够以后,执行原函数
 * @param {*} func
 */

/**
 * 将函数柯里化
 * @param fn    待柯里化的原函数
 * @param len   所需的参数个数，默认为原函数的形参个数
 */
 function curry(fn,len = fn.length) {
  return _curry.call(this,fn,len)
}

/**
* 中转函数
* @param fn    待柯里化的原函数
* @param len   所需的参数个数
* @param args  已接收的参数列表
*/
function _curry(fn,len,...args) {
  return function (...params) {
      console.log(...args,'args')
      console.log(...params,'params')
      let _args = [...args,...params];
      if(_args.length >= len){
          return fn.apply(this,_args);
      }else{
          return _curry.call(this,fn,len,..._args)
      }
  }
}

var _fn = curry(function(a,b,c,d,e){
  console.log(a,b,c,d,e)
});

console.log(_fn)

_fn(1)(2)(3)(4)(5);
