/**
    1、实现一个函数
    2、参数：接收一个前缀，返回对应前缀的唯一key；返回值生成结果需要以 [prefix]_ 为前缀
    3、考虑：安全性、边界等情况，确保代码健壮

    输入输出样例仅为一种实现，只要可以保证题目要求，并不限定输出结果
    （可以为随机数、无实意数字、字母等任何内容）

    样例一输入：
    getUniqId('my')
    输出：my_1

    样例二输入：getUniqId('my')
    输出：my_1

    输入：getUniqId('my')
    输出：my_2

    输入：getUniqId('he')

    输出：he_1
*/

function bigNumAdd(num){
    let numLen = num.length
    if(num < Number.MAX_SAFE_INTEGER){
        return num+1
    }
    let tempStr = '1'
    while(tempStr.length < numLen){
        tempStr = '0' + tempStr
    }
}