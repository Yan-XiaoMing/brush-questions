/**
 * 滑动窗口
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    const len = s.length
    let arr = Array(len).fill(0)
    for(let i = 0 ; i<len ;i++){
        arr[i] = Math.abs(s[i].charCodeAt() - t[i].charCodeAt())
    }
    let left = right = 0
    let sum = res = 0
    while(right < len){
        sum += arr[right]
        while(sum > maxCost){
            sum -= arr[left]
            left++
        }
        res = Math.max(res,right - left + 1)
        right++
    }
    return res
};