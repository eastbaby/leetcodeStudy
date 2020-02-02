// 思路一致，逻辑优化以下的写法可以参照：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/solution/xun-huan-jie-fa-jian-dan-gao-xiao-tu-jie-by-wu-yan/
// 本题还可以考虑主要找到唯一的数字（前后都不想等）才连接上节点作为返回list。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let phead = new ListNode(null);
  phead.next = head;
  let prev = phead;
  let curVal = null;
  let p = head;
  while(p) {
      if(p.val !== curVal) {
          curVal = p.val;
          if(p.next && p.next.val !== curVal || !p.next) {
              prev = p;
          }
      } else {
          while(true) {
              if(p.next && p.next.val !== curVal || !p.next) {
                  break;
              }
              p = p.next;
          }
          prev.next = p.next;
      }
      p = p.next;
  }
  return phead.next;
};
