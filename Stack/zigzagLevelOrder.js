/*
Definition for TreeNode
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.next =null;
        this.parent = null;
    }
}
*/

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

function zigzagLevelOrder(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    let leftToRight = true;
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const levelVals = [];
        
        // Collect one level
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            levelVals.push(node.val);
            
            if (node.left !== null)  queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
        
        // If this level should read right-to-left, reverse before adding
        if (!leftToRight) {
            levelVals.reverse();
        }
        
        result.push(levelVals);
        leftToRight = !leftToRight;
    }
    
    return result;
}
