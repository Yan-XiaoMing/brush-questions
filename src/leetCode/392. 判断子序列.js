/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (t, s) {
  for (let i = 0; i < s.length; i++) {
    if (!t.length) {
      return true;
    }
    if (s[i] === t[0]) {
      t = t.slice(1);
    }
  }
  if (!t.length) {
    return true;
  }
  return false;
};
