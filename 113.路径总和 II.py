# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def pathSum(self, root: TreeNode, sum: int) -> List[List[int]]:
        if not root:
            return []
        if not root.left and not root.right:
            return [[root.val]] if sum == root.val else []
        leftRes = self.pathSum(root.left, sum-root.val)
        rightRes = self.pathSum(root.right, sum-root.val)
        result = []
        if leftRes:
            result += [([root.val] + r) for r in leftRes]
        if rightRes:
            result += [([root.val] + r) for r in rightRes]
        return result