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
var hasCycle = function(head) {
    let fast = slow = head
    while(fast !== null){
        fast = fast.next;
        if(fast !== null){
            fast = fast.next
        }
        if(fast === slow){
            return true
        }
        slow = slow.next
    }
    return false
};