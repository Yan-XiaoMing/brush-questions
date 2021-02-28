/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const xLen = board.length
    const yLen = board[0].length
    let k = 0
    for(let i = 0;i<xLen;i++){
        for(let j = 0 ;j<yLen;j++){
            if(findStr(board,word,i,j,k,xLen,yLen)){
                return true
            }
        }
    }
    return false
};

function findStr(board,word,x,y,k,xLen,yLen){
    if(x < 0 || x>=xLen || y < 0 || y >= yLen || board[x][y] != word[k]){
        return false
    }
    if(k == word.length - 1){
        return true
    }
    let temp = board[x][y]
    board[x][y] = '-'
    let res = findStr(board, word, x - 1, y, k + 1, xLen, yLen) || findStr(board, word, x, y + 1, k + 1, xLen, yLen) || findStr(board, word, x + 1, y,  k + 1, xLen, yLen) || findStr(board, word, x, y-1, k+1, xLen, yLen);//上 右 下 左
    board[x][y] = temp;
    return res;
}