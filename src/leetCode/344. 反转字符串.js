/**
 * 双指针
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

/**
 * 递归
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  convert = (left,right) => {
      if(left >= right){
          return
      }
      [s[left],s[right]] = [s[right],s[left]]
      convert(left+1,right-1)
  }
  convert(0,s.length-1)
};