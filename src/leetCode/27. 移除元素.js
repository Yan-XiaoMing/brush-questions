/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(!nums.length){
        return []
    }
    let res = 0
    for(let i of nums){
        if(i !== val){
            nums[res] = i
            res++;
        }
    }
    return res
};