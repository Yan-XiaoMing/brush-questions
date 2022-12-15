/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let dp = new Array(cost.length).fill(0);
  dp[0] = 0;
  dp[1] = Math.min(cost[0], cost[1]);
  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i - 1]);
  }
  return dp[cost.length - 1];
};

var minCostClimbingStairs = function (cost) {
  let min0 = 0;
  let min1 = Math.min(cost[0], cost[1]);
  let min = -1;
  for (let i = 2; i < cost.length; i++) {
    min = Math.min(min1 + cost[i], min0 + cost[i - 1]);
    min0 = min1;
    min1 = min
  }
  return min
};
