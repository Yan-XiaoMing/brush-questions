/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  nums = nums.sort((a, b) => a - b);
  const max = nums[nums.length - 1];
  const formatNums = new Array(max).fill(0);
  nums.forEach((item) => {
    if (!formatNums[item]) {
      formatNums[item] = 1;
    } else {
      formatNums[item]++;
    }
  });
  let dp = new Array(max + 1).fill(0);
  dp[1] = formatNums[1];

  for (let i = 2; i <= max; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + i * formatNums[i]);
  }
  return dp[max];
};

deleteAndEarn([3, 1]);
