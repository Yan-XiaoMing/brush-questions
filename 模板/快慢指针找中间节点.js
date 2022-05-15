/**
 * 快慢指针找中间节点
 * 
 * 快指针1次移动2个
 * 慢指针1一次移动1个
 * 
 * 如果链表长度为奇数
 * 当快指针不能走的时候慢指针指向中间
 * 
 * 如果链表长度为偶数
 * 当快指针不能走的时候慢指针指向中间2节点的前面一个
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

//使得偶数的时候指向中间的前面一个
function findMiddleFront(head){
  let p = q = head
  while(q.next!=null && q.next.next != null){
    p = p.next
    q = q.next.next
  }
  return p
}

//使得偶数的时候指向中间的后面一个
function findMiddleBack(head){
    let p,q 
    p = q = head 
    while(q!=null && q.next != null){
      p = p.next 
      q = q.next.next
    }
    return p
}