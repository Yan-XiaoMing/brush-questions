/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = Array(nums.length)
    let max = 1
    dp.fill(1)
    for(let i = 1;i<nums.length;i++){
        for(let j = 0;j<i;j++){
            if(nums[j]<nums[i]){
                dp[i] = Math.max(dp[i],dp[j]+1);
                if(max < dp[i]){
                    max = dp[i]
                }
            }
        }
    }
    return max
};