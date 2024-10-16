/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} nodenum_root
 * @param {number} k
 * @return {number}
 */
var kthSmallestII = function(root, nodenum_root, k) {
    let position = nodenum_root.val
    if(root.right != null){
        position -= nodenum_root.right.val
    }
    if(position == k){
        return root.val
    }
    else if (position > k){
        return kthSmallestII(root.left, nodenum_root.left, k);
    }
    else{
        return kthSmallestII(root.right, nodenum_root.right, k - position);
    }
};