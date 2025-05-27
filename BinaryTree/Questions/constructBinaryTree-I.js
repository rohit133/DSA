/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function constructBinaryTreeFromPreorderAndInorderTraversal(preorder, inorder) {
    const n = inorder.length;
    const map = new Map();
    for(let i=0; i<n; i++)
        map.set(inorder[i], i);
    let preIdx = 0;

    function build(start, end){
        if(start > end)
            return null;
        const rootval = preorder[preIdx++];
        const root = new TreeNode(rootval);
        let idx = map.get(rootval);
        root.left = build(start, idx-1)
        root.right = build(idx+1, end);
        return root;
    }
    return build(0, n-1);
}
