/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head){
        return head
    }
    let pre = head
    let cur = null

    while(pre!=null){
        let temp = pre.next
        pre.next = cur
        cur = pre
        pre = temp
    }
    return cur
};