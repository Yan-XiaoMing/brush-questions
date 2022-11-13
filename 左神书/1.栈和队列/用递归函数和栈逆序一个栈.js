const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  const n = Number(await readline());
  const arrStr = await readline();
  const stack = arrStr.split(' ').map((item) => {
    return Number(item)
  })
  reverse(stack)
  reverse(stack)
  console.log(stack.join(' '))
})();

function handleLast(stack = []){
  let res = stack.pop()
  if(!stack.length){
    return res
  }
  else{
    let last = handleLast(stack);
    stack.push(res)
    return last
  }
}

function reverse(stack = []){
  if(!stack.length){ 
    return
  }
  const last = handleLast(stack)
  reverse(stack)
  stack.push(last)
}
