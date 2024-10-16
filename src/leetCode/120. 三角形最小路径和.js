/**
 * @param {number[][]} triangle
 * @return {number}
 */

var minimumTotal = function (triangle) {
  const row = triangle.length;
  const startRow = triangle[row - 1];
  for (let i = row - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      mini[j] = triangle[i][j] + Math.min(mini[j], mini[j + 1]);
    }
  }
};
