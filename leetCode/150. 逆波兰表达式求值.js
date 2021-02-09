/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    let num
    for(let item of tokens){
        switch(item){
            case '+':
                stack.push(stack.pop() + stack.pop())
                break
            case '-':
                num = stack.pop()
                stack.push(stack.pop() - num)
                break
            case '*':
                stack.push(stack.pop() * stack.pop())
                break
            case '/':
                num = stack.pop()
                stack.push(parseInt(stack.pop() / num))
                break
            default:
                stack.push(parseInt(item))
        }
    }
    return stack.pop()
};