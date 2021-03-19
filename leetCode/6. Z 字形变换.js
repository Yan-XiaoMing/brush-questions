/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    let result = []
    if(numRows===1){
        return s
    }
    for(let i = 0;i<numRows;i++){
        result.push([])
    }
    let j = 0,type = 0
    for(let i = 0;i<s.length;i++){
        result[j].push(s[i])
        if(type === 0){
            j++
        }
        else{
            j--
        }
        if(j>=numRows-1){
            type = 1
        }
        if(j<=0){
            type = 0
        }
    }
    let str = ''
    for(let item of result){
        str += item.join('')
    }
    return str
};