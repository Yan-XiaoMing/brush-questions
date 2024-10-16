/**
 * 牛牛有一块"2*n"的空白瓷砖并且有足够多的"1*2"和"2*3"两种类型的地毯(地毯可以旋转).
 * 现在他想在满足以下条件: 地毯之间不能相互重叠,地毯不能铺出瓷砖外以及不能有空隙下铺满整个瓷砖.
 * 问你一共有多少种不同的方案并且结果模上10007输出.
 */
var dp = new Array(100000)
function calculate(){
    dp[0] = 1
    dp[1] = 1
    dp[2] = 2
    for(let i=3;i<100000;i++){
		dp[i]=(dp[i-1]+dp[i-3]+dp[i-2])%10007;
	}
}
calculate()
const t = Number(readline())
for(let i = 0;i<t;i++){
    const n = Number(readline())
    console.log(dp[n])
}