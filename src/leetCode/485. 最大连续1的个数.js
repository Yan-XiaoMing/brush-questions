var findMaxConsecutiveOnes = function(nums) {
    var count  = 0;
    var temp = true;
    var tempCnt = 0;
    for(var i of nums){
        if(i == 1 && temp == true){
            tempCnt++;
        }
        else if(i == 1){
            temp = true;
            tempCnt++;
        }
        else if(i == 0){
            count = Math.max(tempCnt,count);
            temp = false;
            tempCnt = 0;
        }
    }
    count = Math.max(tempCnt,count);
    console.log(count)
    return count;
};

var arr = [1,1,0,1,1,1];
findMaxConsecutiveOnes(arr);

//官方优质写法

var findMaxConsecutiveOnes = function(nums) {
    var count = 0;
    var tempCnt = 0;
    for(var i of nums){
        if(i == 1){
            tempCnt++;
        }
        else{
            count = Math.max(tempCnt,count);
            tempCnt = 0;
        }
    }
    count = Math.max(tempCnt,count);
    return count;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0
    let tempCount = 0
    for(let i  =0;i<nums.length;i++){
        if(nums[i] === 1){
            tempCount++
        }
        else{
            count = Math.max(count,tempCount)
            tempCount = 0
        }
    }
    count = Math.max(count,tempCount)
    return count
};