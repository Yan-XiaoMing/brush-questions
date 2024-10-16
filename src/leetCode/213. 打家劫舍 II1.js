/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const { length } = nums;
  let dp1 = new Array(length + 1).fill(0);
  let dp2 = new Array(length + 1).fill(0);
  dp1[1] = nums[0];
  dp2[1] = 0;
  for (let i = 2; i <= length; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i - 1]);
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i - 1]);
    if (i == length) {
      dp1[i] = dp1[i - 1];
    }
  }
  return Math.max(dp1[length], dp2[length]);
};
