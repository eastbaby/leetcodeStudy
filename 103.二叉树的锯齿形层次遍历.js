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
var zigzagLevelOrder = function(root) {
    let res = [];
    if(!root) {
        return res;
    }
    let queue = [root];
    let dirLeft = true;
    while(queue.length > 0) {
        let levelRes = [];
        let len = queue.length;
        for(let i=0; i<len; i++) {
            levelRes.push(queue[0].val);
            queue[0].left && queue.push(queue[0].left);
            queue[0].right && queue.push(queue[0].right);
            queue.shift();
        }
        levelRes = dirLeft ? levelRes : levelRes.reverse();
        res.push(levelRes);
        dirLeft = !dirLeft;
    }
    return res;
};