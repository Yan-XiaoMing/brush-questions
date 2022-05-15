/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 
 * @param head ListNode类 
 * @return bool布尔型
 */
function hasCycle( head ) {
    let fast = head
    let slow = head
    while(fast){
        if(fast.next === null){
            return false
        }
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            return true
        }
    }
    return false
}
module.exports = {
    hasCycle : hasCycle
};