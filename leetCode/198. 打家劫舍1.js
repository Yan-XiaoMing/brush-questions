/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const { length } = nums;
  let dp = new Array(length + 1).fill(0);
  dp[1] = nums[0];
  for (let i = 2; i <= length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }
  return dp[length]
};
