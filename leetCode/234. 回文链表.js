/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let p = (q = head);
  while (q !== null && q.next !== null) {
    p = p.next;
    q = q.next.next;
  }
  if (q != null) {
    //如果q快指针不为空说明链表为奇数个
    p = p.next;
  }
  p = reverseList(p);
  let cur = head;
  while (p !== null) {
    if (p.val !== cur.val) {
      return false;
    }
    p = p.next;
    cur = cur.next;
  }
  return true;
};

function reverseList(head) {
  let pre, cur;
  pre = null;
  cur = head;
  while (cur !== null) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let slow, fast;
  slow = fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast != null) {
    slow = slow.next;
  }
  let left, right;
  left = head;
  right = reverse(slow);
  while (right != null) {
    if (left.val != right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }
  return true;
};

function reverse(head) {
  let pre = null,
    cur = head;
  while (cur != null) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}
