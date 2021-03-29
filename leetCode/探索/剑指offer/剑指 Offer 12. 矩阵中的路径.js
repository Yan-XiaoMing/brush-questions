/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const xLen = board.length;
  const yLen = board[0].length;
  let k = 0;
  for (let i = 0; i < xLen; i++) {
    for (let j = 0; j < yLen; j++) {
      if (findFun(board, word, x, y, k, xLen, yLen)) {
        return true;
      }
    }
  }
  return false;
};

function findStr(board, word, x, y, k, xLen, yLen) {
  if (x < 0 || x >= xLen || y < 0 || y >= yLen || board[x][y] != word[k]) {
    return false;
  }
  if (k == word.length - 1) {
    return true;
  }
  let temp = board[x][y];
  board[x][y] = "-";
  let res =
    findFun(board, word, x - 1, y, k + 1, xLen, yLen) ||
    findFun(board, word, x, y + 1, k + 1, xLen, yLen) ||
    findFun(board, word, x + 1, y, k + 1, xLen, yLen) ||
    findFun(board, word, x, y - 1, k + 1, xLen, yLen); //上 右 下 左
  board[x][y] = temp;
  return res;
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let row, col;
var exist = function (board, word) {
  row = board.length;
  col = board[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (dfs(board, word, i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};

function dfs(board, word, i, j, k) {
  if (i >= row || i < 0 || j >= col || j < 0 || board[i][j] !== word[k]) {
    return false;
  }
  if (k === word.length - 1) {
    return true;
  }
  board[i][j] = "";
  let result =
    dfs(board, word, i + 1, j, k + 1) ||
    dfs(board, word, i, j + 1, k + 1) ||
    dfs(board, word, i - 1, j, k + 1) ||
    dfs(board, word, i, j - 1, k + 1);
  board[i][j] = word[k];
  return result;
}
