/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let regIndex = 0,
    matchIndex = 0;
  while (matchIndex < s.length && regIndex < p.length) {
    const curReg = p[regIndex];
    const curStr = s[matchIndex];
    if (curReg === "*") {
      const beforeReg = p[regIndex - 1];
      if (beforeReg === ".") {
        matchIndex++;
      } else if (beforeReg === curStr) {
        matchIndex++;
      } else {
        return false;
      }
    } else if (curReg === ".") {
      matchIndex++;
      regIndex++;
    } else if (curStr === curReg) {
      matchIndex++;
      regIndex++;
    } else {
      return false;
    }
  }
  if (
    matchIndex === s.length &&
    (regIndex === p.length || p[regIndex] === "*")
  ) {
    return true;
  }
  return false;
};

isMatch("aa", "a*");
