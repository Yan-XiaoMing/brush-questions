/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  if (!nums.length || nums.length === 1) {
    return false;
  }
  nums = nums.sort();

  for (let i = 1; i <= nums.length - 1; i++) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }
  return false;
};
