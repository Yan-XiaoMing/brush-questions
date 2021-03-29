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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let inPosition = [];
let preValue = [];

var buildTree = function (preorder, inorder) {
  let len = preorder.length;
  for (let i = 0; i < len; i++) {
    inPosition[inorder[i]] = i;
  }
  preValue = preorder;
  let root = constructTree(0, len - 1, 0, len - 1);
  return root;
};
function constructTree(preLeft, preRight, inLeft, inRight) {
  if (preLeft > preRight || inLeft > inRight) {
    return null;
  }
  let rootValue = preValue[preLeft];
  let rootPosition = inPosition[rootValue];
  let rootNode =  new TreeNode(rootValue);
  rootNode.left = constructTree(
    preLeft + 1,
    preLeft + rootPosition - inLeft,
    inLeft,
    rootPosition - 1
  );
  rootNode.right = constructTree(
    preLeft + rootPosition - inLeft + 1,
    preRight,
    rootPosition + 1,
    inRight
  );
  return rootNode;
}
