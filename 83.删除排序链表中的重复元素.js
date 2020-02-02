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
    if(!head) return head;
    if(!head.next) return head;
    let prev = head;
    let curVal = head.val;
    let p = head.next;
    while(p) {
        if(p.val !== curVal) {
            curVal = p.val;
            prev.next = p;
            prev = p;
        }
        p = p.next;
    }
    prev.next = p;
    return head;
};