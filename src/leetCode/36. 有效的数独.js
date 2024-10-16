/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let row = Array(9)
    .fill(0)
    .map(() => {
      return Array(9).fill(0);
    });
  let col = Array(9)
    .fill(0)
    .map(() => {
      return Array(9).fill(0);
    });
  let grid = Array(9)
    .fill(0)
    .map(() => {
      return Array(9).fill(0);
    });
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {}
  }
};

function getGridPosition(i, j) {
  let row = Math.floor((i + 1) / 3) * 3;
  let col = Math.floor((j + 1) / 3);
  return row + col;
}
