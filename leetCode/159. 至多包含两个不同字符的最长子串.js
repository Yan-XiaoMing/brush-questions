/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    if(!s.length){
        return 0
    }
    const k = 2;
    let map = new Map()
    let left = right = res = 0
    while(right < s.length){
        const rightKey = s[right]
        const rightVal = map.get(rightKey)
        if(rightVal){
            map.set(rightKey,rightVal+1)
        }
        else{
            map.set(rightKey,1)
        }
        while(map.size > k){
            const leftKey = s[left]
            let leftVal = map.get(leftKey) - 1
            map.set(leftKey,leftVal)
            if(leftVal === 0){
                map.delete(leftKey)
            }
            left++
        }
        res = Math.max(right - left + 1,res)
        right++
    }
    return res
};