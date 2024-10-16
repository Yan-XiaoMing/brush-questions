/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  let m = mat.length,
    n = mat[0].length;
  let dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
      } else {
        mat[i][j] = -1;
      }
    }
  }
  while (queue.length) {
    let point = queue.shift();
    let [i, j] = point;
    for (let d = 0; d < 4; d++) {
      let dx = i + dir[d][0];
      let dy = j + dir[d][1];
      if (dx >= 0 && dx < m && dy >= 0 && dy < n && mat[dx][dy] === -1) {
        mat[dx][dy] = mat[i][j] + 1;
        queue.push([dx, dy]);
      }
    }
  }
  return mat;
};
