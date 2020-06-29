# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def hasPathSum(self, root: TreeNode, sum: int) -> bool:
        if not root:
            return False
        if not root.left and not root.right:
            return root.val == sum
        leftRes = self.hasPathSum(root.left, sum-root.val)
        rightRes = self.hasPathSum(root.right, sum-root.val)
        return leftRes or rightRes
        