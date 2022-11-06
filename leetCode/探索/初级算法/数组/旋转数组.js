/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const length = nums.length;
  const realK = k % length;
  const frontArr = nums.splice(length - realK);
  nums.unshift(...frontArr);
};

/**
 * 方法2 翻转数组
 */

function reverse(nums, start, end) {
  while (start < end) {
    [nums[start++], nums[end--]] = [nums[end], nums[start]];
  }
}

var rotate = function (nums, k) {
  const length = nums.length;
  const realK = k % length;
  reverse(nums, 0, length - 1);
  reverse(nums, 0, realK - 1);
  reverse(nums,realK, length - 1);
};
