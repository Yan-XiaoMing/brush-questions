/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let queue = [root]
    let result = []
    while(queue.length){
        const node = queue.shift()
        if(node){
            result.push(node.val)
            queue.push(node.left)
            queue.push(node.right)
        }
        else{
            result.push('X')
        }
    }
    return result.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data == 'X'){
        return null
    }
    const list = data.split(',')
    const root = new TreeNode(list[0])
    const queue = [root]
    let cursor = 1
    while(cursor < list.length){
        const node = queue.shift()
        const leftVal = list[cursor]
        const rightVal = list[cursor+1]
        if(leftVal != 'X'){
            const leftNode = new TreeNode(leftVal)
            node.left = leftNode
            queue.push(leftNode)
        }
        if(rightVal != 'X'){
            const rightNode = new TreeNode(rightVal)
            node.right = rightNode
            queue.push(rightNode)
        }
        cursor += 2
    }
    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */