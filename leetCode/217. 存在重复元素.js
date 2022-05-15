/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let count = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (count[nums[i]]) {
      return true;
    } else {
      count[nums[i]] = 1;
    }
  }
  return false;
};
