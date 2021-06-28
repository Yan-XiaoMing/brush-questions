/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

//错误

// var longestCommonSubsequence = function (text1, text2) {
//   let len1 = text1.length;
//   let len2 = text2.length;
//   let maxText, minText;
//   if (len1 >= len2) {
//     maxText = text1;
//     minText = text2;
//     maxLen = len1;
//   } else {
//     maxText = text2;
//     minText = text1;
//     maxLen = len2;
//   }
//   let dp = Array(maxLen + 1).fill(0);
//   let j = 1;
//   for (let i = 1; i <= maxLen; i++) {
//     if (maxText[i - 1] === minText[j - 1]) {
//       dp[i] = dp[i - 1] + 1;
//       j++;
//     } else {
//       dp[i] = dp[i - 1];
//     }
//   }
//   return dp[maxLen];
// };

var longestCommonSubsequence = function (text1, text2) {
  let len1 = text1.length;
  let len2 = text2.length;
  let dp = Array(len1 + 1)
    .fill(0)
    .map(() => {
      return Array(len2 + 1).fill(0);
    });
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[len1][len2];
};
