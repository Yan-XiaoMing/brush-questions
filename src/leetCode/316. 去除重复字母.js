/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let result = Array.from(num)
};

//字符串去重
function removeDuplicateLetters(s){
    let result = []
    let isExist = []
    for(let c of s){
        if(isExist[c]){
            continue
        }
        else{
            if(typeof isExist[c] === 'number'){
                isExist[c]++;
            }
            else{
                isExist[c] = 1
            }
            result.push(c)
        }
    }
    return result.join('')
}

var removeDuplicateLetters = function(s) {
    let result = []
    let countChar = {}
    let isExist = {}
    for(let str of s){
        countChar[str] === undefined?countChar[str]=1:countChar[str]++
    }
    for(let str of s){
        countChar[str]--
        if(isExist[str]){
            continue
        }
        while(result.length && result.slice(-1)>str){
            if(countChar[result.slice(-1)] === 0){
                break
            }
            isExist[result.pop()] = false
        }
        result.push(str)
        isExist[str] = true
    }
    return result.join('')
};



let s = 'bacbaba'
console.log(removeDuplicateLetters(s))