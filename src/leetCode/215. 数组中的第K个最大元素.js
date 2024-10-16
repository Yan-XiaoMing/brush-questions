/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  heapify(nums);
  for (let i = nums.length - 1; i > 0; i--) {
    swap(nums, 0, i);
    heapCore(nums, 0, i);
  }
  return nums[k - 1];
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function heapify(nums) {
  const heapSize = nums.length;
  for (let i = Math.floor((heapSize - 1) / 2); i >= 0; i--) {
    heapCore(nums, i, heapSize);
  }
}

function heapCore(nums, heapIndex, heapSize) {
  const leftIndex = heapIndex * 2 + 1;
  const rightIndex = heapIndex * 2 + 2;
  let bigestIndex = heapIndex;
  if (leftIndex < heapSize && nums[bigestIndex] > nums[leftIndex]) {
    bigestIndex = leftIndex;
  }
  if (rightIndex < heapSize && nums[bigestIndex] > nums[rightIndex]) {
    bigestIndex = rightIndex;
  }
  if (heapIndex !== bigestIndex) {
    swap(nums, heapIndex, bigestIndex);
    heapCore(nums, bigestIndex, heapSize);
  }
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// heapify([3, 2, 3, 1, 2, 4, 5, 5, 6]);

findKthLargest([3, 9, 20, 15, 7]);
