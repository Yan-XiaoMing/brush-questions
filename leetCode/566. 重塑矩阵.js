/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  let m = mat.length;
  let n = mat[0].length;
  if (m * n !== r * c) {
    return mat;
  }
  let cnti = 0,
    cntj = 0;
  let map = Array(r)
    .fill(0)
    .map(() => {
      return Array(c).fill(0);
    });
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      map[cnti][cntj++] = mat[i][j];
      if (cntj === c) {
        cntj = 0;
        cnti++;
      }
    }
  }
  return map;
};
