/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const length = s.length
    if(!length){
        return s
    }
    let left = 0,right = length - 1
    while(left < right){
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
};