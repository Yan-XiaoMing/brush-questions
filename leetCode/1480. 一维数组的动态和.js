/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  if (!nums.length) {
    return nums;
  }
  const sum = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    sum.push(sum[i - 1] + nums[i]);
  }
  return sum;
};
