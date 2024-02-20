/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const length = nums.length;
  if (length <= 1) {
    return;
  }
  let slow = 0;
  for (let quick = 0; quick < length; quick++) {
    if (nums[quick] !== 0) {
      let temp = nums[slow];
      nums[slow] = nums[quick];
      nums[quick] = temp;
      slow++;
    }
  }
  return;
};


