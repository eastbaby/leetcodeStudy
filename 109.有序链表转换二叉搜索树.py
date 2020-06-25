# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def sortedListToBST(self, head: ListNode) -> TreeNode:
        if not head:
            return None
        if not head.next:
            return TreeNode(head.val)
        # find middle node
        endP = head
        middleP = head
        middlePrevP = ListNode(None)
        while endP and endP.next:
            middlePrevP = middleP
            middleP = middleP.next
            endP = endP.next.next
        middlePrevP.next = None
        leftTreeNode = self.sortedListToBST(head)
        rightTreeNode = self.sortedListToBST(middleP.next)
        rootNode = TreeNode(middleP.val)
        rootNode.left = leftTreeNode
        rootNode.right = rightTreeNode
        return rootNode