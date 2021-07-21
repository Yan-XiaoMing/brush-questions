/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";
  let strsLen = strs.length;
  let minLen = Number.MAX_SAFE_INTEGER;
  strs.map((item) => {
    minLen = Math.min(minLen, item.length);
  });
  for (let i = 0; i < minLen; i++) {
    let temp = null,
      flag = 0;
    for (let j = 0; j < strsLen; j++) {
      if (temp === null) {
        temp = strs[j][i];
      }
      if (temp !== strs[j][i]) {
        flag = 1;
      }
    }
    if (!flag) {
      result += strs[0][i];
    } else {
      return result;
    }
  }
  return result;
};

longestCommonPrefix(["flower", "flow", "flight"]);
