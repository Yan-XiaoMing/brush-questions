/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  let cur = 0;
  for (const num of nums) {
    if (cur > 0) {
      cur += num;
    } else {
      cur = num;
    }
    max = Math.max(max, cur);
  }
  return max
};
