/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if(nums.length === 1){
    return nums[0]
  }
  let left = 0,
    right = nums.length - 2,
    end = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if(nums[mid] > nums[end]){
      left = mid + 1
    }
    else{
      right = mid - 1
    }
  }
  return nums[left]
};
