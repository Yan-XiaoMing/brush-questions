/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxLen = 0;
  if (!nums.length) {
    return false;
  }
  for (let i = 0; i < nums.length; i++) {
    if (i > maxLen) {
      return false;
    } else {
      maxLen = Math.max(maxLen, i + nums[i]);
    }
  }
  return true;
};
