/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    if(!nums.length){
        return 0
    }
    let dp = Array(nums.length)
    let counter = Array(nums.length)
    dp.fill(1)
    counter.fill(1)
    let max = 1;
    for(let i = 0;i<nums.length;i++){
        for(let j = 0;j<i;j++){
            if(nums[j]<nums[i]){
                if(dp[i] < dp[j]+1){
                    dp[i] = dp[j]+1
                    counter[i] = counter[j]
                }
                else if(dp[i] === dp[j]+1){
                    counter[i] += counter[j]
                }
            }
        }
        max = Math.max(max,dp[i])
    }
    let res = 0
    for(let i = 0;i<nums.length;i++){
        if(dp[i] == max){
            res += counter[i]
        }
    }
    return res
};