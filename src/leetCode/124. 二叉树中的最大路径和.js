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
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = Number.MIN_SAFE_INTEGER
    const dfs = (root) => {
        if(root == null){
            return 0
        }
        const left = dfs(root.left)
        const right = dfs(root.right)
        const innerMaxSum = left + root.val + right
        maxSum = Math.max(maxSum,innerMaxSum)
        const outputMaxSum = root.val + Math.max(left,right)
        if(outputMaxSum < 0){
            return 0
        }
        return outputMaxSum
    }
    dfs(root)
    return maxSum
};