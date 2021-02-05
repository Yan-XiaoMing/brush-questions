/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
  let count = 0;
  let left = 0,
    right = 0,
    res = 0;
  while (right < A.length) {
    if (A[right++] === 0) {
      count++;
    }
    while (count > K) {
      if (A[left++] === 0) {
        count--;
      }
    }
    res = Math.max(res, right - left);
  }
  return res;
};
