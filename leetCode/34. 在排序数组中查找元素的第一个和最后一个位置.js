/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(!nums.length){
        return [-1,-1]
    }
    return [findFirstPosition(nums,target),findLastPosition(nums,target)]
};

function findFirstPosition(nums,target){
    let left = 0,right = nums.length-1
    while(left <= right){
        let mid = left + (right - left) / 2
        if(nums[mid] === target){
            right = mid - 1
        }
        else if(nums[mid] < target){
            left = mid + 1
        }
        else{
            right = mid - 1
        }
    }
    if(left !== nums.length && nums[left] === target){
        return left
    }
    return -1
}

function findLastPosition(nums,target){
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            // 只有这里不一样：不可以直接返回，应该继续向右边找，即 [mid + 1, right] 区间里找
            left = mid + 1;
        } else if (nums[mid] < target) {
            // 应该继续向右边找，即 [mid + 1, right] 区间里找
            left = mid + 1;
        } else {
            // 此时 nums[mid] > target，应该继续向左边找，即 [left, mid - 1] 区间里找
            right = mid - 1;
        }
    }
    // 由于 findFirstPosition 方法可以返回是否找到，这里无需单独再做判断
    return right;
}