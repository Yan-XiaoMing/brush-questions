/**
 * @param {string} s
 * @return {boolean}
 */
let isNumber = function (s) {
  s = s.trim();
  for (let i = 0; i < s.length; i++) {
    const curStr = s[i];
    if (isIncludeStr(curStr)) {
      if (i === 0) {
        if (curStr === "E" || curStr === "e") {
          return false;
        }
      }
    } else {
      return false;
    }
  }
};

function isIncludeStr(currentStr) {
  if (
    currentStr === "e" ||
    currentStr === "E" ||
    currentStr === "+" ||
    currentStr === "-" ||
    currentStr === "." ||
    (currentStr >= "0" && currentStr <= "9")
  ) {
    return true;
  }
  return false;
}
