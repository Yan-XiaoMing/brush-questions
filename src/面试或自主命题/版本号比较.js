/**
 * 比较版本号
 * @param version1 string字符串 
 * @param version2 string字符串 
 * @return int整型
 */
function compare( version1 ,  version2 ) {
    let versionArr1 = version1.split('.')
    let versionArr2 = version2.split('.')
    let index = 0
    // console.log(versionArr1)
    // console.log(versionArr2)
    while(index < versionArr1.length && index < versionArr2.length){
        if(parseInt(versionArr1[index]) < parseInt(versionArr2[index])){
            return -1
        }else if(parseInt(versionArr1[index]) > parseInt(versionArr2[index])){
            return 1
        }
        else{
            index++
        }
    }
    if(index < versionArr1.length){
        return 1
    }
    if(index < versionArr2.length){
        return -1
    }
    return 0
}
compare("50.52.145.192","185.223.215.112.122")
module.exports = {
    compare : compare
};