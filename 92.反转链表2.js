/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if(m===n) return head;
  let i = 1;
  let fakeHead = new ListNode(null);
  fakeHead.next = head;
  let left = fakeHead;
  let p = head;
  // find m
  while(i<m) {
      left = p;
      p = p.next;
      i++;
  }
  let right = left.next;
  // reverse
  let next = p.next;
  let nextnext;
  while(i<n) {
      nextnext = next.next;
      next.next = p;
      p = next;
      next = nextnext;
      i++;
  }
  // join
  left.next = p;
  right.next = next;
  return fakeHead.next;
};