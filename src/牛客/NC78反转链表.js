/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    if(!pHead){
        return pHead
    }
    let pre = null
    let cur = pHead
    while(cur != null){
        let temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp    
    }
    return pre
}