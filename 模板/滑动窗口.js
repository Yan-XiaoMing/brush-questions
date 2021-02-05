/**
 * 滑动窗口
 * @param {number} nums
 * @return {number}
 */
function findSubArray(nums = []){
    const len = nums.length
    let left = right = 0
    let sum = 0 //统计子数组/子区间 是否有效,可以根据题目改为求和/计数
    let res = 0 //保存最大满足题目要求的 子数组/子串的长度
    while(right < len){
        sum += nums[right] //增加当前右指针的 数字/字符的求和/计数
        while  区间[left,right]不符合题意{ //此时需要一直移动左指针,直到找到一个符合题意的区间为止
            sum -= nums[left] //移动左指针需要从当前的count中减少left位置的字符的求和/计数
            left++
        }
        //while结束的时候我们找到了一个符合题意要求的 子数组/子串
        res = Math.max(res,right - left + 1)
        right++
    }
    return res
}