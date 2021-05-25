// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
function maskify(cc) {
    const endNum = 4
    if(cc.length <= 4){
        return cc
    }
    else{
        let per = ''
        for(let i = 0;i<cc.length - endNum;i++){
            per += '#'
        }
        let endStr = cc.slice(-endNum)
        return per + endStr
    }
}
