/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === "") {
    return 0;
  }
  let i = 0,
    m = haystack.length;
  let j = 0,
    n = needle.length;
  let next = getNext(needle);
  while (i < m && j < n) {
    if (j == -1 || needle[j] === haystack[i]) {
      i++;
      j++;
    } else {
      j = next[j];
    }
  }
  return j === n ? i - j : -1;
};

function getNext(needle) {
  let next = [];
  next[0] = -1;
  let k = -1,
    j = 0;
  while (j < needle.length) {
    if (k == -1 || needle[k] === needle[j]) {
      next[++j] = ++k;
    } else {
      k = next[k]; //后缀指针k回退到next[k]的位置
    }
  }
  return next;
}
