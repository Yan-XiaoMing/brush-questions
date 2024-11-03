/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  // your imeplementation here
  // let curDepth = 0;
  let res = [];
  baseFlatten(arr, depth, res);
  return res;
}

function baseFlatten(array, depth, result = []) {
  if (array == null) {
    return result;
  }
  array.forEach((arrItem) => {
    if (depth > 0 && Array.isArray(arrItem)) {
      if (depth > 1) {
        baseFlatten(arrItem, depth - 1, result);
      } else {
        result.push(...arrItem);
      }
    } else {
      result.push(arrItem);
    }
  });
  return result;
}

const arr2 = [0, 1, 2, [[[3, 4]]]];

// console.log(flat(arr2,2));
// console.log(flat(arr2));

/**
 * 迭代法
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  while (depth && arr.some((item) => Array.isArray(item))) {
    depth--;
    arr = [].concat(...arr);
  }
  return arr;
}

console.log(flat(arr2, 2));
console.log(flat(arr2));
