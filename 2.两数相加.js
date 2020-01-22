/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let p1 = l1; p2 = l2;
  let p3 = new ListNode(0);
  let p = p3;
  let flag = 0;
  while(true) {
      if(!p1 && !p2 && !flag) {
          break;
      }
      let curVal = (p1 ? p1.val : 0) + (p2 ? p2.val : 0) + flag;
      if(curVal < 10) {
          p3.next = new ListNode(curVal);
          flag = 0;
      } else {
          p3.next = new ListNode(curVal - 10);
          flag = 1;
      }
      p3 = p3.next;
      if(p1) {
          p1 = p1.next;
      }
      if(p2) {
          p2 = p2.next;
      }
  }
  return p.next;
};