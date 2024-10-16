var numWays = function(s) {
    var num1 = 0;
    var len = s.length;
    var fkingNum = 1000000007;
    for(let i = 0;i < len; i++){
        if(s[i] == 1){
            num1++
        }
    }
    if(num1 === 0){
        return ((len - 1) * (len - 2) / 2) % fkingNum;
    }
}