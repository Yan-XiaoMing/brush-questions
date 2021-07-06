/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const len = cost.length;

  let dp = Array(len + 1).fill(0);
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i < len; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return Math.min(dp[len - 2], dp[len - 1]);
};
