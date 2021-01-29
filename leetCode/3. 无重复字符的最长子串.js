/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0,
    map = new Map();
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      //如果有该字符则更新 i 的值,[i,j]为最新的不重复的字符串的区间
      i = Math.max(map.get(s[j]) + 1, i); //新的不重复字符串的开始位置为上一次重复位置的下一个
    }
    max = Math.max(max, j - i + 1); //最长的不重复的字符串为 max([i,j],max)
    map.set(s[j], j);
  }
  return max;
};

var lengthOfLongestSubstring = function (s) {
  let max = 0,
    map = new Map();
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(i, map.get(s[j]) + 1);
    }
    max = Math.max(max, j - i + 1);
    map.set(s[j], j);
  }
  return max
};
