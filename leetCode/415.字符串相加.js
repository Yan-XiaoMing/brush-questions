/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let result = [];
  let carry = 0;
  while (num1.length < num2.length) {
    num1 = "0" + num1;
  }
  while (num1.length > num2.length) {
    num2 = "0" + num2;
  }
  console.log(num1)
  console.log(num2)
  for (let i = num1.length - 1; i >= 0; i--) {
    let sum = carry + parseInt(num1[i]) + parseInt(num2[i]);
    if (sum > 9) {
      sum -= 10;
      carry = 1
    }
    else{
      carry = 0
    }
    result.unshift(sum)
  }
  if(carry){
    result.unshift(carry)
  }
  return result.join('')
};

console.log(addStrings('9133','0'))
