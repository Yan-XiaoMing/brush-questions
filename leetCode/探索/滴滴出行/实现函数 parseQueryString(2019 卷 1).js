/**
 * https://leetcode-cn.com/leetbook/read/didiglobal1/ewt9f1/
 * @param {string} url
 * @param {string} key
 * @return {string}
 */
var parseQueryString = function(url, key) {
    url = decodeURIComponent(url)
    console.log(url)
    const EMPTY = '_EMPTY_'
    let paramArr = url.split('?')
    if(paramArr.length > 1){
        let param = paramArr[1]
        let keyMapArr = param.split('&')
        for(let item of keyMapArr){
            let itemArr = item.split('=')
            let itemKey = itemArr[0]
            if(itemKey === key){
                return itemArr[1]
            }
        }
        return EMPTY
    }   
    else{
        return EMPTY
    }
};

console.log(parseQueryString("https://www.didichuxing.com/path?key1=%23b&key_3=key2#key1",'key1'))