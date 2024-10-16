/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let nodeList = []
    if(head == null){
        return head
    }
    let tempHead = head
    while(tempHead!=null){
        nodeList.push(tempHead)
        tempHead = tempHead.next
    }
    if(nodeList.length === n){
        return head.next
    }
    else{
        nodeList[nodeList.length - n - 1].next = nodeList[nodeList.length - n].next
        return head
    }
};