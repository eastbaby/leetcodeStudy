# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def flatten(self, root: TreeNode) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        p = root
        while p:
            if p.left:
                self.flatten_one(p)
            p = p.right
        
    def flatten_one(self, root: TreeNode) -> None:
        right_node = root.right
        left_node = root.left
        right_last_node = self.find_deepest_right(root.left)
        right_last_node.right = right_node
        root.right = left_node
        root.left = None

    def find_deepest_right(self, root: TreeNode) -> TreeNode:
        if root and root.right:
            return self.find_deepest_right(root.right)
        return root