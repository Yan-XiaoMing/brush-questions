/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const len = nums.length;
  let p = todoRob(0, len - 1, nums);
  let q = todoRob(1, len, nums);
  return Math.max(p, q);
};

function todoRob(start, end, nums = []) {
  let nNums;
  if (start === end) {
    return nums[0];
  } else {
    nNums = nums.slice(start, end);
  }
  const len = nNums.length;
  let dp = Array(len + 1).fill(0);
  dp[1] = nNums[0];
  for (let i = 2; i <= end; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nNums[i - 1]);
  }
  return dp[len];
}

let num = [0];

console.log(rob(num));
