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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let stack = [];
  let minValue = Number.MIN_SAFE_INTEGER;
  let node = root;
  while (stack.length || node) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    let popNode = stack.pop();
    if (popNode.val <= minValue) {
      return false;
    }
    minValue = popNode.val;
    if (popNode.right) {
      node = popNode.right
    }
  }
  return true;
};
