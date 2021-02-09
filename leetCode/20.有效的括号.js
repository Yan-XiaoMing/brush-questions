/**
 * @param {string} s
 * @return {boolean}
 */
var string1 = "()"

var isValid = function(s) {
    const cache = []
    const map = new Map()
    map.set("(", ")")
    map.set("[", "]")
    map.set("{", "}")
    for(let str of s){
        if(map.has(str)){
            cache.push(str)
        }
        else{
            if(cache.length === 0){
                return false
            }
            if(map.get(cache[cache.length - 1]) === str){
                cache.pop()
            }
            else{
                return false
            }
        }
    }
    if(cache.length){
        return false
    }
    return true
};

console.log(isValid(string1))

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let map = new Map()
    map.set('(',')')
    map.set('{','}')
    map.set('[',']')
    for(let i of s){
        if(map.has(i)){
            stack.push(i)
        }
        else{
            if(!stack.length){
                return false
            }
            if(map.get(stack[stack.length-1]) === i){
                stack.pop()
            }
            else{
                return false
            }
        }
    }
    if(caches.length){
        return false
    }
    return true
};