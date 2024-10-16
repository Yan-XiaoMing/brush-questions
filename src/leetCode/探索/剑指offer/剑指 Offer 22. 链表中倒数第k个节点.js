/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let p,q,temp;
    p = q = head
    temp = k
    while(temp){
        temp--
        q = q.next
    }
    while(q!=null){
        p = p.next
        q = q.next
    }
    return p
};
