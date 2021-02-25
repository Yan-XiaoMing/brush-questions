/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let result = []
    for(let j = 0;j<matrix[0].length;j++){
        let temp = []
        for(let i = 0;i<matrix.length;i++){
            temp.push(matrix[i][j])
        }
        result.push(temp)
    }
    return result
};