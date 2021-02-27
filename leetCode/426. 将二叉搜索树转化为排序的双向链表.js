/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    if(!root){
        return root
    }
    let stack = []
    let node = root
    let head = new Node(-1,null,null)
    let prev = head
    while(node != null || stack.length){
        while(node != null){
            stack.push(node)
            node = node.left
        }
        let pop = stack.pop()
        prev.right = pop
        pop.left = prev
        prev = pop
        if(pop.right){
            node = pop.right
        }
    }
    head.right.left = prev
    prev.right = head.right
    return head.right
};