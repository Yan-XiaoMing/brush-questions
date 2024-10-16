/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * https://pic.leetcode-cn.com/379a042b9d8df3a96d1ac0f27346718033bf3bfce69731bab52bf6f372b4c8f4-Picture2.png
 */
var myPow = function (x, n) {
  if (x === 0) {
    return 0;
  }
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let res = 1;
  while (n > 0) {
    if ((n & 1) === 1) {
      res *= x;
    }
    x *= x;
    n >>>= 1;
  }
  return res;
};
