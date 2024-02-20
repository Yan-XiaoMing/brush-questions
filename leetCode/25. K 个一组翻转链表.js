/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

const arr = [1, 2, 3, 4, 5, 6];
let preHead = new ListNode(-1);
let curHead = preHead;

arr.forEach((item) => {
  curHead.next = new ListNode(item);
  curHead = curHead.next;
});

var reverseKGroup = function (head, k) {
  const dummyNode = new ListNode(-1, head);
  let preNode = dummyNode,
    endNode = dummyNode;
  while (endNode.next !== null) {
    for (let count = 0; count < k && endNode !== null; count++) {
      endNode = endNode.next;
    }
    if (endNode == null) break;
    let startNode = preNode.next;
    let nextNode = endNode.next;
    preNode.next = reverse(startNode, nextNode);
    startNode.next = nextNode;
    preNode = startNode;
    endNode = preNode
  }
  return dummyNode.next;
};

function reverse(startNode, nextNode) {
  let preNode = null;
  let curNode = startNode;
  while (curNode !== nextNode) {
    let tempNode = curNode.next;
    curNode.next = preNode;
    preNode = curNode;
    curNode = tempNode;
  }
  return preNode;
}

reverseKGroup(preHead.next, 3);
