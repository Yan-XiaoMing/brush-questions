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
var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    let last = reverseList(head.next)
    last.next.next = head;
    last.next = null
    return last
};

