/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function (s, t) {
  let minLen = s.length + 1;
  let start = s.length; // 结果子串的起始位置
  let map = {}; // 存储目标字符和对应的缺失个数
  let missingType = 0; // 当前缺失的字符种类数
  for (const c of t) {
    // t为baac的话，map为{a:2,b:1,c:1}
    if (!map[c]) {
      missingType++; // 需要找齐的种类数 +1
      map[c] = 1;
    } else {
      map[c]++;
    }
  }
  console.log(map);
  let left = (right = 0);
  while (right < s.length) {
    let rightChar = s[right];
    if (map[rightChar] !== undefined) {
      map[rightChar]--;
    }
    if (map[rightChar] === 0) {
      missingType--;
    }
    while (missingType === 0) {
      if (right - left + 1 < minLen) {
        // 窗口宽度如果比minLen小，就更新minLen
        minLen = right - left + 1;
        start = left; // 更新最小窗口的起点
      }
      let leftChar = s[left] //左指针右移,左指针指向的字符被丢弃
      if(map[leftChar] !== undefined) {
          map[leftChar]++ //如果被舍弃的为目标字符,则缺失个数+1
      }
      if(map[leftChar] > 0){
          missingType++
      }
    }
    right++
  }
  if(start === s.length){
      return ""
  }
  return s.substring(start, start + minLen); // 根据起点和minLen截取子串
};
minWindow('ADOBECODEBANC','ABC')