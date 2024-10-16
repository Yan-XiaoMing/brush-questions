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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let x = null;
  let y = null;
  let pre = null;
  let stack = [];
  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (pre !== null && root.val < pre.val) {
      y = root;
      if (x === null) {
        x = pre;
      } else {
        break;
      }
    }
    pre = root;
    root = root.right;
  }
  const temp = x.val;
  x.val = y.val;
  y.val = temp;
};
