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
var isPalindrome = function(head) {
    let p = q = head
    while(q !== null && q.next !== null ){
        p = p.next
        q = q.next.next
    }
    if(q != null){ //如果q快指针不为空说明链表为奇数个
        p = p.next
    }
    p = reverseList(p)
    let cur = head
    while(p !== null){
        if( p.val !== cur.val ){
            return false
        }
        p = p.next
        cur = cur.next
    }
    return true
};

function reverseList(head){
    let pre,cur
    pre = null
    cur = head
    while(cur !== null){
        let temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    return pre
}