/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let len1 = word1.length;
  let len2 = word2.length;
  let dp = Array(len1 + 1)
    .fill(0)
    .map(() => {
      return Array(len2 + 1).fill(0);
    });
  for (let i = 1; i <= len1; i++) {
    dp[i][0] = dp[i - 1][0] + 1;
  }
  for (let j = 1; j <= len2; j++) {
    dp[0][j] = dp[0][j - 1] + 1;
  }
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] =
          Math.min(Math.min(dp[i - 1][j - 1], dp[i][j - 1]), dp[i - 1][j]) + 1;
      }
    }
  }
  return dp[len1][len2];
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let len1 = word1.length;
  let len2 = word2.length;
  let dp = Array(len1 + 1)
    .fill(0)
    .map(() => {
      return Array(len2 + 1).fill(0);
    });
  for (let i = 1; i <= len1; i++) {
    dp[i][0] = dp[i - 1][0] + 1;
  }
  for (let j = 1; j <= len2; j++) {
    dp[0][j] = dp[0][j - 1] + 1;
  }
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] =
          Math.min(Math.min(dp[i - 1][j - 1], dp[i][j - 1]), dp[i - 1][j]) + 1;
      }
    }
  }
  return dp[len1][len2];
};

var minDistance = function (word1, word2) {
  let len1 = word1.length;
  let len2 = word2.length;
  let dp = Array(len1 + 1)
    .fill(0)
    .map(() => {
      return Array(len2 + 1).fill(0);
    });
  for (let i = 1; i <= len1; i++) {
    dp[i][0] = dp[i - 1][0] + 1;
  }
  for (let j = 1; j <= len2; j++) {
    dp[0][j] = dp[0][j - 1] + 1;
  }
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] =
          Math.min(Math.min(dp[i - 1][j - 1], dp[i - 1][j]), dp[i][j - 1]) + 1;
      }
    }
  }
  return dp[len1][len2];
};
