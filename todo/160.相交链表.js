/**
 * 编写一个程序，找到两个单链表相交的起始节点。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

 // 双指针遍历
 // A遍历结束后，访问B
 // B遍历结束后，访问A
 var getIntersectionNode = function(headA, headB) {
  if(!headA||!headB) return null
  let a=headA,b=headB
  while(a!==b){
      a=a?a.next:headB
      b=b?b.next:headA
  }
  return a
};