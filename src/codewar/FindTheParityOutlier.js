function findOutlier(integers = []) {
  let odd = [];
  let even = [];
  for (let item of integers) {
    if (item % 2 === 0) {
      even.push(item);
    } else {
      odd.push(item);
    }
  }
  if (even.length > odd.length) {
    return odd[0];
  } else {
    return even[0];
  }
}
