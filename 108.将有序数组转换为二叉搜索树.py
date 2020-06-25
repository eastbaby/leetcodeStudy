# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        if not nums:
            return None
        if len(nums) == 1:
            return TreeNode(nums[0])
        middleIndex = (len(nums) -1) // 2
        leftTreeNode = self.sortedArrayToBST(nums[0:middleIndex])
        rightTreeNode = self.sortedArrayToBST(nums[middleIndex+1:])
        rootNode = TreeNode(nums[middleIndex])
        rootNode.left = leftTreeNode
        rootNode.right = rightTreeNode
        return rootNode