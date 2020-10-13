/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
给定 1->2->3->4, 你应该返回 2->1->4->3.
链接：https://leetcode-cn.com/problems/swap-nodes-in-pairs
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// var swapPairs = function (head) {
//   const swap = (list) => {
//     if(!list){
//       return null
//     }
//     if(!list.next){
//       return list
//     }
//       const follow = swap(list.next.next) //需要交换节点的后面的节点
//       const changed = new ListNode(list.val, follow) //交换后第二个位置的节点
//       return new ListNode(list.next.val, changed)
//   }
//   head = swap(head)
//   return head
// };

const swapPairs=function(head){
  if(head==null||head.next==null){
    return head
  }
  const newHead=head.next
  head.next=swapPairs(newHead.next)
  newHead.next=head
  return newHead
}

const { generateListNode } = require('./generateListNode')
const list = new generateListNode()
list.insert(1)
list.insert(2)
list.insert(3)
list.insert(4)
console.log(swapPairs(list.head));
