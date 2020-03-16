/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(postorder.length < 1) {
        return null;
    }
    let val = postorder[postorder.length-1];
    let root = new TreeNode(val);
    let pivot = inorder.findIndex(v => v === val);
    let leftTree = buildTree(inorder.slice(0, pivot), postorder.slice(0, pivot));
    let rightTree = buildTree(inorder.slice(pivot+1), postorder.slice(pivot, -1));
    root.left = leftTree;
    root.right = rightTree;
    return root;
};