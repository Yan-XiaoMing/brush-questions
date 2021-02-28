/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    if(A == null || B == null){
        return false
    }
    if(recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)){
        return true
    }
    return false
};

function recur(A,B){
    if(B == null){
        return true
    }
    if(A == null || A.val != B.val){
        return false
    }
    return recur(A.left,B.left) && recur(A.right,B.right)
}