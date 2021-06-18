/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  let dp = new Array(n + 1).fill(1);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i < n + 1; i++) {
    for (let j = 2; j < i; j++) {
      dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]));
    }
  }
  return dp[n];
};

var cuttingRope = function (n) {
  let dp = new Array(n + 1).fill(1);
  dp[2] = 1;
  for (let i = 3; i < n + 1; i++) {
    for (let j = 2; j < i; j++) {
      dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]));
    }
  }
  return dp[n];
};
