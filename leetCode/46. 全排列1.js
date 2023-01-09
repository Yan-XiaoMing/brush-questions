/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let used = {};

  function dfs(path = []) {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for(let num of nums){
      if(used[num]){
        continue;
      }
      used[num] = true;
      path.push(num)
      dfs(path)
      path.pop()
      used[num] = false
    }
  }
  dfs([]);
  return res;
};


permute([1,2,3])
