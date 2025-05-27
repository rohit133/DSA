function getHeight(node) {
    if(!node) 
        return 0;
    let leftHeight = getHeight(node.left);
    let rightHeight = getHeight(node.right);

    if(leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > -1)
        return -1;
    return (Math.max(leftHeight, rightHeight) + 1)
}

function isBalanced(root){
    if(getHeight(root) !== -1){
        return true
    } else {
        return false
    } 
    
}


