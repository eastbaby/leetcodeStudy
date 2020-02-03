/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if(!head || !head.next) {
      return head;
  }
  let left = new ListNode(null);
  let p1 = left;
  let right = new ListNode(null);
  let p2 = right;
  let p = head;
  while(p) {
      if(p.val < x) {
          left.next = p;
          left = p;
      } else {
          right.next = p;
          right = p;
      }
      p = p.next;
  }
  right.next  = null;
  if(!p1.next) {
      return p2.next;
  }
  left.next = p2.next;
  return p1.next;
}