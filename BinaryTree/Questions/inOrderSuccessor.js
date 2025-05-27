function leftMost(node) {
    let curr = node;
    while (curr.left !== null) {
        curr = curr.left;
    }
    return curr;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} givenNode
 * @return {TreeNode}
 */
function inOrderSuccessor(root, givenNode) {
    if(!root ||  !givenNode) return null;
    
    if(givenNode.right !== null)
        return leftMost(givenNode.right);

    let succ = null, curr = root;

    while(curr !== null) {
        if(givenNode.val < curr.val){
            succ = curr;
            curr = curr.left;
        } else if (givenNode.val > curr.val){
            curr = curr.right;
        } else {
            break;
        }
    }
    return succ;
}
