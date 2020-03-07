// 用递归做的时候困难在于找min／max，完全科研在参数上带上去写递归（如官方法）
// better 方法是做一遍中序遍历
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
var isValidBST = function(root) {
    if(!root) {
        return true;
    }
    let curRes = true;
    if(root.left && findMax(root.left).val >= root.val) {
        curRes = false;
    }
    if(root.right && findMin(root.right).val <= root.val) {
        curRes = false;
    }
    return curRes && isValidBST(root.left) && isValidBST(root.right);
};

function findMin(root) {
    if(root.left) {
        return findMin(root.left);
    }
    return root;
}
function findMax(root) {
    if(root.right) {
        return findMax(root.right);
    }
    return root;
}