function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function preOrderRecursion(treeNode) {
  if (!treeNode) {
    return;
  }
  console.log(treeNode.val);
  preOrderRecursion(treeNode.left);
  preOrderRecursion(treeNode.right);
}

var leftEnd = new TreeNode(0, null, null);
var leftMid = new TreeNode(1, leftEnd, null);
var head = new TreeNode(2, leftMid, null);

function preOrderIteration(treeNode) {
  if (!treeNode) {
    return null;
  }
  const arr = [treeNode];
  while (arr.length) {
    const curRoot = arr.pop();
    console.log(curRoot.val);
    if (curRoot.right) {
      arr.push(curRoot.right);
    }
    if (curRoot.left) {
      arr.push(curRoot.left);
    }
  }
}

function inOrderIteration(treeNode) {
  if (!treeNode) {
    return;
  }
  const arr = [];
  while (treeNode || arr.length) {
    if (treeNode) {
      arr.push(treeNode);
      treeNode = treeNode.left;
    } else {
      treeNode = arr.pop();
      console.log(treeNode.val);
      treeNode = treeNode.right;
    }
  }
}

function afterIteration(treeNode){
  if (!treeNode) {
    return;
  }
  const stackFirst = [treeNode],stackAfter = []
  while(stackFirst.length){
    const cur = stackFirst.pop()
    if(cur.left){
      stackFirst.push(cur.left)
    }
    if(cur.right){
      stackFirst.push(cur.right)
    }
    stackAfter.push(cur)
  }
  while(stackAfter.length){
    const top = stackAfter.pop()
    console.log(top.val)
  }
}
