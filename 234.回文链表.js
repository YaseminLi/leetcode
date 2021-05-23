/**
 * 请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

 // 找到链表中点的方式找到后半部分起点
 // 反转后半部分链表
 // 遍历比较
 var isPalindrome = function(head) {
  if(!head) return false
  let fast=head
  let slow=head // 链表后半部分起点
  let preSlow=null
  while(fast&&fast.next){
      fast=fast.next.next
      preSlow=slow
      slow=slow.next
  }

  let newLinked=null
  while(slow){
      const temp=slow
      slow=slow.next

      temp.next=newLinked
      newLinked=temp
  }

  if(preSlow)preSlow.next=null //切断前段部分
  let point1=head
  let point2=newLinked

  while(point1&&point2){
      if(point1.val!==point2.val)return false
      point1=point1.next
      point2=point2.next
  }

  return true

};