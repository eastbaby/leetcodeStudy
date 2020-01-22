/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  let len = getLen(head);
  k = k % len;
  let phead = head;
  for(let i=0; i<k; i++) {
      phead = rotateOne(phead);
  }
  return phead;
};

function getLen(head) {
  if(!head) {
      return 0;
  }
  let p = head;
  let len = 0;
  while(p) {
      len ++;
      p = p.next;
  }
  return len;
}

function rotateOne(head) {
  if(!head) {
      return head;
  }
  if(!head.next) {
      return head;
  }
  let p = head;
  let prev = new ListNode(null);
  while(p.next) {
      prev = p;
      p = p.next;
  }
  // last listNode
  prev.next = null;
  p.next = head;
  return p;
}