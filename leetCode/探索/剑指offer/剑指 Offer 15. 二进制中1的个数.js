/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let number = 0;
  let str = n.toString(2);
  for (let i = 0; i <= str.length; i++) {
    if (str[i] == "1") {
      number++;
    }
  }
  return number;
};
