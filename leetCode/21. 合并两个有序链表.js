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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val > l2.val) {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  } else {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }
  if (list1.val > list2.val) {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  } else {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1
  }
};
