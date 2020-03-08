// 本题直观解法是利用O(n)空间，遍历一遍+排序+再遍历一次更新值。
// 这里解法是常数空间，但时间复杂度一致。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let maxNode = null;
    let minNode = null;
    let lastNode = null;
    const inorderTraversal = (root) => {
        if(!root) {
            return;
        }
        inorderTraversal(root.left);
        if(lastNode && root.val <= lastNode.val) {
            // 这里可以简化。由于只有两个数字颠倒了，所以最多有两次顺序错的情况，可以减枝。
            // min／max寻找也不用这么麻烦比较更新, 想象成线性排序好理解一些。第一个一定是max，最后一个一定是min。
            maxNode = maxNode ? (maxNode.val < lastNode.val ? lastNode : maxNode) : lastNode;
            minNode = minNode ? (minNode.val > root.val ? root : minNode) : root;
        }
        lastNode = root;
        inorderTraversal(root.right);
    }
    inorderTraversal(root);
    let tmp = minNode.val;
    minNode.val = maxNode.val;
    maxNode.val = tmp;
};