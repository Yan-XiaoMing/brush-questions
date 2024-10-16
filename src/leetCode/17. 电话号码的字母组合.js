/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits.length){
        return []
    }
    let map = [" ","*","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
    let res = []
    res.push('')
    for(let i = 0;i<digits.length;i++){
        const levelSize = res.length
        let str = map[parseInt(digits[i])]
        for(let j = 0;j<levelSize;j++){
            const curStr = res.shift()
            for(let k of str){
                res.push(curStr+k)
            }
        }
    }
    return res
};

var letterCombinations = function(digits) {
    if(!digits.length){
        return []
    }
    let map = [" ","*","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
    let res = []
    res.push('')
    for(let i of digits){
        const str = map[parseInt(i)]
        const size = res.length
        for(let j = 0;j<size;j++){
            const front = res.shift()
            for(let k of str){
                res.push(front + k)
            }
        }
    }
    return res  
}