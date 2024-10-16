/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let res = null
    let inorder = function (node){
        if(k > 0 && node !== null){
            inorder(node.left)
            k--
            if(k === 0){
                res = node.val
                return 
            }
            inorder(node.right)
        }
    }
    inorder(root)
    return res
};