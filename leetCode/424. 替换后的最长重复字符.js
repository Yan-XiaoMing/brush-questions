/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    if(!s){return 0}
    let code = Array(26).fill(0)
    let left = right = res = 0 
    while(right < s.length){
        code[s[right].charCodeAt() - 'A'.charCodeAt()]++
        res = Math.max(res,code[s[right].charCodeAt() - 'A'.charCodeAt()])
        if(right - left + 1 - res > k){
            code[s[left].charCodeAt() - 'A'.charCodeAt()]--
            left++
        }
        right++
    }
    return right - left
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    if(!s){
        return 0
    }
    let code = Array(26).fill(0)
    let left = right = res = 0
    while(right < s.length){
        code[s[right].charCodeAt() - 'A'.charCodeAt()]++
        res = Math.max(code[s[right].charCodeAt() - 'A'.charCodeAt()],res)
        if(right - left + 1 > res + k){
            code[s[left].charCodeAt() - 'A'.charCodeAt()]--
            left++
        }
        right++
    }
    return right - left
}