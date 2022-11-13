/**
 * 左侧前缀和 为 sum
 * 若当前 左右和 相等 sum = total - sum - num[i]
 * 即 2*sum + nums[i] = total
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const total = nums.reduce((a, b) => {
    return a + b;
  }, 0);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (sum * 2 + nums[i] === total) {
      return i;
    }
    sum += nums[i];
  }
  return -1;
};
