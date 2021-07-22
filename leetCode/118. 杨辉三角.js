/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let map = [];
  map.push([1]);
  for (let i = 1; i < numRows; i++) {
    let preLen = map[i - 1].length;
    let level = [];
    for (let j = 0; j <= i; j++) {
      if (j - 1 >= 0 && j < preLen) {
        let number = map[i - 1][j - 1] + map[i - 1][j];
        level.push(number);
      } else {
        level.push(1);
      }
    }
    map.push(level);
  }
  return map;
};
