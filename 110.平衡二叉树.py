# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        def getTreeHeight(root: TreeNode):
            if not root:
                return 0, True
            leftHeight, leftBalanced = getTreeHeight(root.left)
            rightHeight, rightBalanced = getTreeHeight(root.right)
            if not leftBalanced or not rightBalanced:
                return max(leftHeight, rightHeight) + 1, False
            if abs(leftHeight - rightHeight) <= 1:
                return max(leftHeight, rightHeight) + 1, True
            else :
                return max(leftHeight, rightHeight) + 1, False
        height, result = getTreeHeight(root)
        return result

# 本题可以直接写一个 返回 height 的 helper，逻辑更清晰