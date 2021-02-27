/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var distanceInTree = function(root, p, q) {
    let ancestor= findAncestor(root,p,q)
    return getDistance(ancestor,p) + getDistance(ancestor,q);
};

//最近公共祖先
function findAncestor(root,p,q){
    if(root == null || root.val == p || root.val == q){
        return root
    }
    let left = findAncestor(root.left,p,q)
    let right = findAncestor(root.right,p,q)
    if(left && right){
        return root
    }
    if(!left){
        return right
    }
    if(!right){
        return left
    }
}

function getDistance(ancestor,value){
    if(!ancestor){
        return Number.MIN_SAFE_INTEGER
    }
    if(ancestor.val == value){
        return 0
    }
    return Math.max(getDistance(ancestor.left,value)+1,getDistance(ancestor.right,value)+1)
}