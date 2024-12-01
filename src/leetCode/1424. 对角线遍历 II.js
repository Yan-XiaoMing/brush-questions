/** timeout 超级大数据超时了
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function (nums) {
  let n = -1;
  const m = nums.length;
  nums.forEach((numsArr) => {
    n = Math.max(n, numsArr.length);
  });
  const k = n + m - 1;
  const res = [];
  for (let i = 0; i < k; i++) {
    let x = i < m ? i : m - 1;
    let y = i < m ? 0 : i - m + 1;

    while (x >= 0 && y < n) {
      if (nums[x][y] !== undefined) {
        res.push(nums[x][y]);
      }
      x--;
      y++;
    }
  }
  return res;
};

//             [[1,2,3],                                 1
//              [4,5,6],    变成树                 4             2
//              [7,8,9]]                     7         5      null 3
//                                      null    8    null 6
//                                            null 9
/** 模拟树层序遍历
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function (nums) {
  const m = nums.length,
    queue = [],
    res = [];
  queue.push([nums[0][0], 0, 0]);
  while (queue.length > 0) {
    const [val, x, y] = queue.shift();
    res.push(val);
    const i = x + 1;
    const j = y + 1;
    if (i < m && y < nums[i].length && y === 0) {
      queue.push([nums[i][y], i, y]);
    }
    if (x < m && j < nums[x].length) {
      queue.push([nums[x][j], x, j]);
    }
  }
  return res;
};
