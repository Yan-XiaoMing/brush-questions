var movingCount = function (m, n, k) {
  function getsum(x) {
    let sum = 0;
    while (x) {
      sum += x % 10;
      x = Math.floor(x / 10);
    }
    return sum;
  }

  const directedArr = [
    [0, 1], // 右
    [1, 0], // 下
  ];
  var s = new Set(["0,0"]);
  dfs(0, 0, k);

  function dfs(x, y, k) {
    for (let i = 0; i < 2; i++) {
      let offsetX = x + directedArr[i][0];
      let offsetY = y + directedArr[i][1];
      if (
        offsetX < 0 ||
        offsetY < 0 ||
        offsetX > m - 1 ||
        offsetY > n - 1 ||
        getsum(offsetY) + getsum(offsetX) > k ||
        s.has(`${offsetX},${offsetY}`)
      ) {
        continue;
      }
      s.add(`${offsetX},${offsetY}`);
      dfs(offsetX, offsetY, k);
    }
  }
  return s.size;
};

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

const directionArr = [
  [0, 1],
  [1, 0],
];
function getSum(number) {
  let sum = 0;
  while (number) {
    let num = number % 10;
    number /= 10;
    sum += num;
  }
  return sum;
}

var movingCount = function (m, n, k) {
  let s = new Set(["0,0"]);
  function dfs(x, y, k) {
    for (let i = 0; i < 2; i++) {
      let offsetX = x + directionArr[i][0];
      let offsetY = y + directionArr[i][1];
      if (
        offsetX < 0 ||
        offsetY < 0 ||
        offsetX > m - 1 ||
        offsetY > n - 1 ||
        getSum(offsetX) + getSum(offsetY) > k ||
        s.has(`${offsetX},${offsetY}`)
      ) {
        continue;
      }
      s.add(`${offsetX},${offsetY}`);
      dfs(offsetX, offsetY, k);
    }
  }
  dfs(0, 0, k);
  return s.size;
};
