/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    if (!preorder.length) {
      return null
    }
    let val = preorder.shift()
    let root = new TreeNode(val)
    root.left = bstFromPreorder(preorder.filter(item => item < val))
    root.right = bstFromPreorder(preorder.filter(item => item > val))
    return root
};
