/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    const preSum = new Array(nums.length + 1)
    preSum[0] = 0
    for(let i = 0;i<nums.length;i++){
        preSum[i + 1] = preSum[i] + nums[i]
    }
    this.preSum = preSum
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.preSum[j + 1] - this.preSum[i] 
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */