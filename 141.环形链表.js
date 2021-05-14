/**
 * 给定一个链表，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

如果链表中存在环，则返回 true 。 否则，返回 false 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/linked-list-cycle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 快慢指针，龟兔赛跑，存在环的话总能相遇
 var hasCycle = function(head) {
   if(!head) return false
    let slow=head
    let fast=head.next
    while(slow&&fast){
      if(fast===slow) return true
      slow=slow.next
      if(fast.next){
        fast=fast.next.next
      }else {
        return fasle
      }
    }
    return false
};

 //map 结构存储遍历过的节点,内存消耗大
 var hasCycle = function(head) {
  if(!head) return false
   const map=new Map()
  
   while(head){
     if(map.has(head)) return true
     map.set(head,true)
     head=head.next
   }
   return false
};