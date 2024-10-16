/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 1) {
    if (target === nums[0]) {
      return 0;
    } else {
      return -1;
    }
  }
  let left = 0,
    right = nums.length - 2,
    end = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[end]) {
      if (target > nums[end] && nums[mid] >= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > nums[end] || nums[mid] >= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  console.log(left, right);
  if (nums[right] === target) {
    return right;
  }
  if (nums[left] === target && left <= end) {
    return left;
  }
  return -1;
};

search([1, 3], 3);
