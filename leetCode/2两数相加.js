/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
   var head = new ListNode('head');
   var curr = head;
   var carry = 0;
    while(l1 || l2){
        let sum1 = (l1===null?0:l1.val)
        let sum2 = (l1===null?0:l2.val)
        let sum = sum1 + sum2 + carry;
        carry = parseInt(sum/10)
        curr.next = new ListNode(sum%10)
        curr = curr.next;
        if(l1 !== null){
            l1 = l1.next
        }
        if(l2 !== null){
            l2 = l2.next
        }
    }
    if (carry === 1) {
        curr.next = new ListNode(carry);
    }
    return head.next;
};

addTwoNumbers([2,4,3],[5,6,4])