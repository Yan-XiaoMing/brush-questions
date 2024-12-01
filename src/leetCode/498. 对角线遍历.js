const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const result = [1, 2, 4, 7, 5, 3, 6, 8, 9];
/**
 * 三角形遍历法
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  let reverse = false;
  const [m, n] = [mat.length, mat[0].length];
  const k = m + n - 1;
  const res = [];
  for (let i = 0; i < k; i++) {
    const tempRes = [];
    for (let j = 0; j <= i; j++) {
      if (!mat[i - j] || mat[i - j][j] === undefined) continue;
      if (reverse) {
        tempRes.unshift(mat[i - j][j]);
      } else {
        tempRes.push(mat[i - j][j]);
      }
    }
    res.push(...tempRes);
    reverse = !reverse;
  }
  return res;
};
// findDiagonalOrder(mat);

/**
 * 直接模拟法
 * @param {number[][]} mat
 * @return {number[]}
 */

var findDiagonalOrder = function (mat) {
  const [m, n] = [mat.length, mat[0].length];
  const k = m + n - 1;
  const res = [];
  for (let i = 0; i < k; i++) {
    if (i % 2 === 1) {
      let x = i < n ? 0 : i - n + 1;
      let y = i < n ? i : n - 1;
      while (x < m && y >= 0) {
        res.push(mat[x][y]);
        x++;
        y--;
      }
    } else {
      let x = i < m ? i : m - 1;
      let y = i < m ? 0 : i - m + 1;
      while (x >= 0 && y < n) {
        res.push(mat[x][y]);
        x--;
        y++;
      }
    }
  }
  return res;
};

/**
 * 直接模拟法
 * (单方向,不拐弯 => 左下 -> 右上)
 * @param {number[][]} mat
 * @return {number[]}
 */

var findDiagonalOrder3 = function (mat) {
  const [m, n] = [mat.length, mat[0].length];
  const k = m + n - 1;
  const res = [];
  for (let i = 0; i < k; i++) {
    let x = i < m ? i : m - 1;
    let y = i < m ? 0 : i - m + 1;
    while (x >= 0 && y < n) {
      res.push(mat[x][y]);
      x--;
      y++;
    }
  }
  console.log(res);
  return res;
};
findDiagonalOrder3(mat);

/**
 * 直接模拟法
 * (单方向,不拐弯 => 右上 -> 左下)
 * @param {number[][]} mat
 * @return {number[]}
 */

var findDiagonalOrder4 = function (mat) {
  const [m, n] = [mat.length, mat[0].length];
  const k = m + n - 1;
  const res = [];
  for (let i = 0; i < k; i++) {
    let x = i < n ? 0 : i - n + 1;
    let y = i < n ? i : n - 1;
    while(x < m && y >= 0){
      res.push(mat[x][y]);
      x++;
      y--;
    }
  }
  console.log(res);
  return res;
};
findDiagonalOrder4(mat);
