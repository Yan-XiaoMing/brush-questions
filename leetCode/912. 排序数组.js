/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length<=1){
        return nums
    }
    return recursion(nums,0,nums.length-1)
};

function recursion(arr,left,right){
    if(left >=right){
        return
    }
    let index = partition(arr,left,right)
    console.log(arr)
    // recursion(arr,left,index-1)
    // recursion(arr,index+1,right)
    return arr
}

function partition(arr,left,right){
    let temp = arr[left]
    while(left < right){
        while(left < right && arr[right] >= temp){
            right--
        }
        arr[left] = arr[right]
        while(left < right && arr[left] < temp){
            left++
        }
        arr[right] = arr[left]
    }
    arr[left] = temp
    return left
}