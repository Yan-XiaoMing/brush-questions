/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = new Map()
    map.set('(',')')
    map.set('{','}')
    map.set('[',']')
    let stack = []
    for(let item of s){
        if(map.has(item)){
            stack.push(item)
        }
        else{
            if(!stack.length){
                return false
            }
            if(map.get(stack[stack.length-1])=== item){
                stack.pop()
            }
            else{
                return false
            }
        }
    }
    if(stack.length){
        return false
    }
    return true
};