/*
Definition for TreeNode
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
*/


/**
 * @param {TreeNode} root
 * @return {int}
 */
function diameterOfBinaryTree(root){
    let diameter = 0;
    function getDepth(node){
        if(!node) return 0;
        let left = getDepth(node.left);
        let right = getDepth(node.right);
        diameter = Math.max(diameter, (left + right));
        return 1 + Math.max(left, right);
    }
    getDepth(root);
    return diameter;
}