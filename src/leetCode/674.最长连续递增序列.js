/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(!nums.length){
        return 0
    }
    let max = temp = 0
    let p = 0,q = 1;
    while(q<nums.length){
        if(nums[q]>nums[p]){
            temp++;
            p++;
            q++;
        }
        else{
            max = Math.max(temp,max)
            temp = 0
        }
    }
    return max
};