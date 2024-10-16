/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let index1 = nums1.length - 1,
    index2 = nums2.length - 1,
    index = nums1.length + nums2.length - 1;
  while (index2 >= 0) {
    if (index1 >= 0 && nums1[index1] > nums2[index2]) {
        nums1[index] = nums1[index1]
        index1--
        index--
    }
    else{
        nums1[index] = nums2[index2]
        index--
        index2--
    }
  }
  let len = nums1.length
  const middle = parseInt(len / 2)
  let res 
  if(len % 2 === 0){
    res = (nums1[middle] + nums1[middle-1])/2
  }
  else{
    res = nums1[middle]
  }
  return res.toFixed(5)
};
