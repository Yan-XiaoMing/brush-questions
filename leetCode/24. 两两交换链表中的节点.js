/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const preHead = new ListNode(-1, head);
  let tempNode = preHead;
  while (tempNode.next !== null && tempNode.next.next !== null) {
    const leftNode = tempNode.next;
    const rightNode = tempNode.next.next;

    tempNode.next = rightNode;
    leftNode.next = rightNode.next;
    rightNode.next = leftNode;

    tempNode = leftNode;
  }

  return preHead.next;
};
