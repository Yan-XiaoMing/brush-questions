/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = []
    const pathArr = path.split('/')
    for(let i of pathArr){
        if(i == '' || i == '.'){
            continue
        }
        else if(i == '..'){
            stack.pop()
        }
        else{
            stack.push(i)
        }
    }
    return '/' + stack.join('/')
};