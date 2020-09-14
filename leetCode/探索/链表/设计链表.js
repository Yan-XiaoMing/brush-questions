/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
    this.end = null;
    this.length = 0;
};

var ListNode = function(val){
    this.val = val;
    this.next = null
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
   if(index>=0 && index < this.length){
    let num = 0;
    let cur = this.head
    while(i<index){
        cur = cur.next
        i++;
    }
    return cur.val
   }
   else{
       return -1;
   }
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const oldHead = this.head;
    let node = new ListNode(val)
    let head = node;
    this.head = head
    head.next = oldHead
    if(!this.end){
        this.end = node
        this.end.next = null
    }
    this.length++
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let oldTail = this.end;
    let node = new ListNode(val)
    this.end = node;
    if(oldTail){
        oldTail.next = this.end;
    }
    if(!this.head){
        this.head = node
    }
    this.length++
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {

};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {

};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */