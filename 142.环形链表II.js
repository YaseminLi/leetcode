/**
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

说明：不允许修改给定的链表。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/linked-list-cycle-ii
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

// 快慢指针
// 当快慢指针相遇时，新建一个指针从头开始与slow同步走，相遇时为入环点
 var detectCycle = function(head) {
   let fast=head;
   let slow=head;

   while(true){
    if(!fast||!fast.next) return null;
     fast=fast.next.next;
     slow=slow.next;
     if(fast===slow)break;
   }

   // 此时slow指向相遇点
   fast=head;
   while(fast!==slow){
    fast=fast.next;
     slow=slow.next;
   }
   return fast;
    
};