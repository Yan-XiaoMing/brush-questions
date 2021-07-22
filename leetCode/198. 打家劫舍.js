/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let len = nums.length;
  if (!len) {
    return 0;
  }
  let dp = Array(len + 1).fill(0);
  dp[1] = nums[0];
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }
  return dp[len];
};
