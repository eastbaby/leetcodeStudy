/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    if(!root) {
        return res;
    }
    let queue = [root];
    while(queue.length > 0) {
        let levelRes = [];
        let len = queue.length;
        for(let i=0; i<len; i++) {
            levelRes.push(queue[0].val);
            queue[0].left && queue.push(queue[0].left);
            queue[0].right && queue.push(queue[0].right);
            queue.shift();
        }
        res.push(levelRes);
    }
    return res;
};

// 直观解法，广搜queue。也可以用递归做（传递depth遍历的时候push相应数组）