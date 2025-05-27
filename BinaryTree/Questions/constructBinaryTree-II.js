/**
 * @param {number[]} postorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function constructBinaryTreeFromPostorderAndInorderTraversal(postorder, inorder) {
    const n = inorder.length;
    const map = new Map();
    for(let i=0; i<n; i++)
        map.set(inorder[i], i);

    let postIdx = n-1;

    function build(start, end){
        if(start > end) return null;
        
        let rootVal = postorder[postIdx--];
        let root = new TreeNode(rootVal);

        let index = map.get(rootVal);

        root.right = build(index + 1, end);
        root.left = build(start, index - 1);


        return root;
    }
    return build(0, n-1);
}
