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
var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }
  const dummy = new ListNode(0, head);
  let cur = dummy;
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      let tempVal = cur.next.val;
      while (cur.next && cur.next.val === tempVal) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }
  return dummy.next;
};

var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }
  let tempHead = new ListNode(0, head);
  let cur = tempHead;
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      let tempVal = cur.next.val;
      while (cur.next && cur.next.val === tempVal) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }
  return tempHead.next;
};
