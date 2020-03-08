// 本题和前一题思路一脉相承
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) {
        return true;
    }
    const isSameRev = (p, q) => {
        if(!p && !q) {
            return true;
        }
        let curSame = false;
        if(p && q && p.val === q.val) {
            curSame = true;
        }
        return curSame && isSameRev(p.left, q.right) && isSameRev(p.right, q.left);
    };
    return isSameRev(root.left, root.right);
};