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

/**
 * @param {number} n
 * @return {number}
 */

const map = {};
var fib = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (map[n]) {
    return map[n];
  }
  let result = fib(n - 1) + fib(n - 2);
  map[n] = result;
  return result;
};
