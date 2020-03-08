/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if(!root) {
      return [];
  }
  let left = inorderTraversal(root.left);
  let right = inorderTraversal(root.right);
  return left.concat([root.val], right);
};


// 前/中/后 是相对于当前父节点的顺序来说的。

// 直观思路是递归；也可以利用栈stack用循环迭代来做。