/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  let result = 0,
    map = new Map();
  for (let i = 0, j = 0; j < len; j++) {
    if (map.has(s[j])) {
      i = Math.max(i, map.get(s[j]) + 1);
    }
    result = Math.max(result, j - i + 1);
    map.set(s[j], j);
  }
  return result;
};
