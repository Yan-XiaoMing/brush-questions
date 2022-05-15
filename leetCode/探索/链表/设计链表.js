        /**
* Initialize your data structure here.
*/
var MyLinkedList = function() {
    this.head = null
    this.tail = null
    this.length = 0
};

var listNode = function(val) {
    this.val = val
    this.next = null
}

/**
* Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function(index) {
    if (index >=0 && index < this.length) {
        let i = 0
        let cur = this.head
        while (i < index) {
            cur = cur.next
            i ++
        }
        return cur.val
    } else {
        return -1
    }
};

/**
* Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
    const lastHead = this.head
    const node = new listNode(val)
    this.head = node
    this.head.next = lastHead
    if (!this.tail) {
        this.tail = node
        this.tail.next = null
    }
    this.length ++
};

/**
* Append a node of value val to the last element of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
    const lastTail = this.tail
    const node = new listNode(val)
    this.tail = node
    if (lastTail) {      
        lastTail.next = this.tail
    }
    if (!this.head) {
        this.head = node
        this.head.next = null
    }
    this.length ++
};

/**
* Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === this.length) {
        this.addAtTail(val)
    } else if (index <= 0) {
        this.addAtHead(val)
    } else if (index > 0 && index < this.length) {
        let i = 0
        let prev = this.head
        while (i < index - 1) {
            prev = prev.next
            i ++
        }
        const node = new listNode(val)
        node.next = prev.next
        prev.next = node
        this.length ++
    }
};

/**
* Delete the index-th node in the linked list, if the index is valid. 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index > 0 && index < this.length) {
        let i = 0
        let prev = null
        let cur = this.head
        while (i < index) {
            prev = cur
            cur = cur.next
            i ++
        }
        prev.next = cur.next
        if (index === this.length - 1) {
            this.tail = prev
        }
        this.length --
    } else if (index === 0) {
        this.head = this.head.next
        this.length --
    }
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