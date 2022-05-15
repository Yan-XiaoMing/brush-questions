/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    if(nums.length === 1){
        return true
    }
    let flag = nums[0] <= nums[1] ? true : false //标识是否能被修改
    for(let i = 1;i<nums.length - 1;i++){
        if(nums[i] > nums[i+1]){
            if(flag){
                if(nums[i+1] >= nums[i-1]){
                    nums[i] = nums[i+1]
                }
                else{
                    nums[i+1] = nums[i]
                }
                flag = false
            }
            else{
                return false
            }
        }
    }
    return true
};