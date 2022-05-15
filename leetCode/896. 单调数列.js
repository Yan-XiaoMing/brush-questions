/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    if(A.length <=2){
        return true
    }
    let type = 0
    let pre = 0
    for(let i = 1;i<A.length;i++,pre++){
        if(!type){
            if(A[i] > A[pre]){
                type = 1
            }
            else if(A[i] < A[pre]){
                type = 2
            }
        }
        else{
            if(type === 1){
                if(A[i] < A[pre]){
                    return false
                }
            }
            else if (type === 2){
                if(A[i] > A[pre]){
                    return false
                }
            }
        }
    }
    return true
};