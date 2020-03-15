/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let res = 0;
    if(!root) {
        return res;
    }
    let queue = [root];
    while(queue.length > 0) {
        let len = queue.length;
        for(let i=0; i<len; i++) {
            queue[0].left && queue.push(queue[0].left);
            queue[0].right && queue.push(queue[0].right);
            queue.shift();
        }
        res++;
    }
    return res;
};

// 空间更高效的做法就是用递归（因为树的结构空间复杂度是logN）