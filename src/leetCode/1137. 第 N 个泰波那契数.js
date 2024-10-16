/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 2;
  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp[n];
};
