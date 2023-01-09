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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  let node = root;
  let stack = [];
  let res = [];
  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    const popNode = stack.pop();
    res.push(popNode.val);
    if (popNode.right) {
      node = popNode.right;
    }
  }
  return res
};
