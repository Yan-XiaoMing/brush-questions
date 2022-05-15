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
  let left = head;
  let right = head.next;
  if (!right) {
    return head;
  }
  if (right.next) {
    while (right != null) {
      if (left.val === right.val) {
        left.next = right.next;
      } else {
        left = left.next;
      }
      right = right.next;
    }
    return head;
  } else {
    if (left.val === right.val) {
      left.next = null;
    }
    return left;
  }
};

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
  let left = head,
    right = head.next;
  if (!right) {
    return left;
  }
  if (right.next) {
    while (right) {
      if (left.val === right.val) {
        left.next = right.next;
      } else {
        left = left.next;
      }
      right = right.next;
    }
    return head;
  } else {
    if (left.val === right.val) {
      left.next = null;
      return left;
    }
  }
};
