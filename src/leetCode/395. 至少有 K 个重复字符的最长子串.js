/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    let ret = 0
    for(let t = 1;t<=26;t++){
        let l = r = 0
        const count = Array(26).fill(0)
        let tot = 0
        let less = 0
        while(r < s.length){
            count[s[r].charCodeAt() - 'a'.charCodeAt()]++
            if (count[s[r].charCodeAt() - 'a'.charCodeAt()] === 1) {
                tot++;
                less++;
            }
            if(count[s[r].charCodeAt() - 'a'.charCodeAt()] === k){
                less--
            }
            while (tot > t) {
                cnt[s[l].charCodeAt() - 'a'.charCodeAt()]--;
                if (cnt[s[l].charCodeAt() - 'a'.charCodeAt()] === k - 1) {
                    less++;
                }
                if (cnt[s[l].charCodeAt() - 'a'.charCodeAt()] === 0) {
                    tot--;
                    less--;
                }
                l++;
            }
            if (less == 0) {
                ret = Math.max(ret, r - l + 1);
            }
            r++;
        }
    }
    return ret
};