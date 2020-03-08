/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p && !q) {
        return true;
    }
    let curSame = false;
    if(p && q && p.val === q.val) {
        curSame = true;
    }
    return curSame && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};