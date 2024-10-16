const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  const res = [];
  const map = new Map();
  const length = strs.length;
  for (let i = 0; i < length; i++) {
    const curStr = strs[i];
    const curStrArr = strs[i]
      .split("")
    const orderCurStrArr = curStrArr.sort((a, b) =>{
      return a.charCodeAt() - b.charCodeAt()
    })
    const key = orderCurStrArr.join('');
      // .sort((a, b) => a - b)
      // .join("");
    if (map.has(key)) {
      const beforeValue = map.get(key);
      beforeValue.push(curStr)
      map.set(key, beforeValue);
    } else {
      map.set(key, [curStr]);
    }
  }
  map.forEach((value) => res.push(value));
  return res;
};

/**
 * 优化
 */
var groupAnagrams = function (strs) {
  const res = [];
  const map = new Map();
  const length = strs.length;
  for (let i = 0; i < length; i++) {
    const curStr = strs[i];
    const curStrArr = Array.from(curStr);
    curStrArr.sort();
    const key = curStrArr.toString();
    if (map.has(key)) {
      const beforeValue = map.get(key);
      beforeValue.push(curStr)
      map.set(key, beforeValue);
    } else {
      map.set(key, [curStr]);
    }
  }
 
  return Array.from(map.values());
};
