# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def minDepth(self, root: TreeNode) -> int:
        if not root:
            return 0
        leftDepth = self.minDepth(root.left)
        rightDepth = self.minDepth(root.right)
        if leftDepth == 0:
            return rightDepth + 1
        elif rightDepth == 0:
            return leftDepth + 1
        return min(leftDepth, rightDepth) + 1