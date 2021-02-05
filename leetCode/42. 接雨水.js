/**
 * 暴力 o(n²)
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const len = height.length;
  if (len < 3) {
    return 0;
  }
  let res = 0;
  for (let i = 1; i < len - 1; i++) {
    let leftMax = leftMax(i, height);
    let rightMax = rightMax(i, height, len);
    if (height[i] < Math.min(leftMax, rightMax)) {
      res += Math.min(leftMax, rightMax) - height[i];
    }
  }
  return res;
};

function leftMax(center, height) {
  let res = 0;
  for (let i = center - 1; i >= 0; i--) {
    res = Math.max(res, height[i]);
  }
  return res;
}

function rightMax(center, height, n) {
  let res = 0;
  for (let i = center + 1; i < n; i++) {
    res = Math.max(res, height[i]);
  }
  return res;
}

//shareParam

/**
 * 双指针
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let len = height.length;
  if (len < 3) {
    return 0;
  }
  let res = 0;
  let leftMax = height[0];
  let rightMax = height[len - 1];
  let left = 1;
  let right = len - 2;
  while (left <= right) {
    let minVal = Math.min(leftMax, rightMax);
    if (minVal === leftMax) {
      if (minVal > height[left]) {
        res += minVal - height[left];
      }
      leftMax = Math.max(leftMax, height[left]);
      left++;
    } else {
      if (minVal > height[right]) {
        res += minVal - height[right];
      }
      rightMax = Math.max(rightMax, height[right]);
      right--;
    }
  }
  return res;
};

var trap = function(height){
	let length = height.length
	if(length < 3){
		return 0
	}
	let res = 0
	let leftMax = height[0],rightMax = height[length - 1],left = 1,right = length -2;
	while(left <= right){
		let minVal = Math.min(leftMax,rightMax);
		if(minVal === leftMax){
			if(minVal > height[left]){
				res += minVal - height[left]
			}
			leftMax = Math.max(leftMax,height[left])
			left++
		}
		else{
			if(minVal > height[right]){
				res += minVal - height[right]
			}
			rightMax = Math.max(rightMax,height[right])
			right--
		}
	}
	return res
}