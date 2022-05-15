/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];
  const dfs = (left, right, str) => {
    if (str.length === 2 * n) {
      result.push(str);
      return;
    }
    if (left > 0) {
      dfs(left - 1, right, str + "(");
    }
    if (left < right) {
      dfs(left, right - 1, str + ")");
    }
  };
  dfs(n, n, "");
  return result;
};

var generateParenthesis = function (n) {
  let result = [];
  const dfs = (left, right, str) => {
    if (str.length === n * 2) {
      result.push(str);
      return;
    }
    if (left > 0) {
      dfs(left - 1, right, str + "(");
    }
    if (left < right) {
      dfs(left, right - 1, str + ")");
    }
  };
  dfs(n, n, "");
  return result;
};
