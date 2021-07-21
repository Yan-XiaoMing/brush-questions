/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let s1Len = s1.length,
    s2Len = s2.length;
  if (s1Len > s2Len) {
    return false;
  }
  let cnt1 = Array(26).fill(0);
  let cnt2 = cnt1.slice();
  for (let i = 0; i < s1Len; i++) {
    cnt1[s1[i].charCodeAt() - "a".charCodeAt()]++;
    cnt2[s2[i].charCodeAt() - "a".charCodeAt()]++;
  }
  if (cnt1.toString() === cnt2.toString()) {
    return true;
  }
  for (let i = s1Len; i < s2Len; i++) {
    cnt2[s2[i].charCodeAt() - "a".charCodeAt()]++;
    cnt2[s2[i - s1Len].charCodeAt() - "a".charCodeAt()]--;
    if (cnt1.toString() === cnt2.toString()) {
      return true;
    }
  }
  return false;
};
console.log(checkInclusion("abcdxabcde", "abcdeabcdx"));
