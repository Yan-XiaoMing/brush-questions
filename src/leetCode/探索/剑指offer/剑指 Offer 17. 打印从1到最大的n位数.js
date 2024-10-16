/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  let number = Math.pow(10, n) - 1;
  let res = []
  for(let i =1;i<=number;i++){
    res.push(i)
  }
  return res
};
