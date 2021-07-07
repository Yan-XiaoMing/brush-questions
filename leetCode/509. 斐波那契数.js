/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let dp = Array(31).fill(0);
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return n;
};
