/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
  if (!s.length) {
    return 0;
  }
  let left = (right = count = res = 0);
  let map = new Map();
  while (right < s.length) {
    if (map.get(s[right])) {
      map.set(s[right], map.get(s[right]) + 1);
    } else {
      map.set(s[right], 1);
    }
    console.log(map)
    while (map.size > k) {
      map.set(s[left], map.get(s[left]) - 1);
      if (map.get(s[left]) === 0) {
        map.delete(s[left]);
      }
      left++;
    }
    res = Math.max(res, right - left + 1);
    right++;
  }
  return res;
};
