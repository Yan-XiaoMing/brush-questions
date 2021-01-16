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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let pre = null;
    let current = head;
    while(current != null){
        let temp = current.next;
        current.next = pre;
        pre  = current;
        current = temp;
    }
    return pre;
};

var reverseList = function(head){
    let pre = null
    let curr = head
    while(curr!=null){
        let temp = curr.next
        curr.next = pre
        pre = curr
        curr = temp
    }
    return pre
}