/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    if (maxLen < i) {
      return false;
    }
    maxLen = Math.max(i + nums[i], maxLen);
  }
  return true;
};
