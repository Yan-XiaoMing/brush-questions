/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if(nums.length<2){
    return 0
  }
  let left = 0,
    right = nums.length - 2;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > nums[mid + 1]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
