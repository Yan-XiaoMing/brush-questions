/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numsSet = new Set(nums);
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!numsSet.has(nums[i] - 1)) {
      let curLen = 1;
      let curNum = nums[i] + 1;
      while (numsSet.has(curNum)) {
        curLen++;
        curNum++;
      }
      max = Math.max(curLen, max);
    }
  }
  return max;
};

longestConsecutive([100,4,200,1,3,2])
