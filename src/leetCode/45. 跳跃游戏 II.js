/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let ans = 0;
  let end = 0;
  let maxPosition = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxPosition = Math.max(nums[i] + i, maxPosition);
    if (i === end) {
      end = maxPosition;
      ans++;
    }
  }
  return ans;
};
