/**
 * @param {number[]} prices
 * @return {number}
 */
//单调遍历
var maxProfit = function (prices) {
  let minValue = Number.MAX_SAFE_INTEGER;
  let maxValue = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minValue) {
      minValue = prices[i];
    } else if (prices[i] - minValue > maxValue) {
      maxValue = prices[i] - minValue;
    }
  }
  return maxValue;
};

//dp
var maxProfit = function (prices) {
  const len = prices.length;
  let dp = Array(len).fill(0);
  let minValue = prices[0];
  for (let i = 1; i < len; i++) {
    if (prices[i] < minValue) {
      minValue = prices[i];
      dp[i] = dp[i - 1];
    } else {
      dp[i] = Math.max(dp[i - 1], prices[i] - minValue);
    }
  }
  return dp[len - 1];
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length;
  let dp = Array(len).fill(0);
  let minValue = prices[0];
  for (let i = 1; i < len; i++) {
    if (prices[i] < minValue) {
      minValue = prices[i];
      dp[i] = dp[i - 1];
    } else {
      dp[i] = Math.max(dp[i - 1], prices[i] - minValue);
    }
  }
  return dp[len - 1];
};
