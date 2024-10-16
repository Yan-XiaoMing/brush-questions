/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  let count = 1;
  let preNode = head
  while(count < left){
    preNode = preNode.next
    count++;
  }
  let pre = null,curNode = preNode
  while(count < right){
    let next = curNode.next
    
  }
};
