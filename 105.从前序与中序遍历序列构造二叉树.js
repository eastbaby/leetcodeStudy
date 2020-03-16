/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length < 1) {
        return null;
    }
    let val = preorder[0];
    let root = new TreeNode(val);
    let pivot = inorder.findIndex(v => v === val);
    let leftTree = buildTree(preorder.slice(1, pivot+1), inorder.slice(0, pivot));
    let rightTree = buildTree(preorder.slice(pivot+1), inorder.slice(pivot+1));
    root.left = leftTree;
    root.right = rightTree;
    return root;
};

// 思路就是递归！递归！（注意：只有preorder和postorder没法构建）