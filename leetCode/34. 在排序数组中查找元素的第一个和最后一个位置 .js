/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = binarySearch(nums, target, "left");
  let right = binarySearch(nums, target, "right");
  return [left, right];
};

function binarySearch(nums = [], target, boundary) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      if (boundary === "left") {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  if (boundary === 'left') {
    if (left >= nums.length || nums[left] !== target) {
      return -1;
    }
    return left;
  } else {
    if (right < 0 || nums[right] !== target) {
      return -1;
    }
    return right;
  }
}
searchRange([5, 7, 7, 8, 8, 10], 8);
