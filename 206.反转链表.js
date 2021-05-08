/**
 * 输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
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

//迭代
var reverseList = function (head) {
  let curNode = head
  let targetNodeList = null
  while (curNode) {
    targetNodeList = new ListNode(curNode.val, targetNodeList)
    curNode = curNode.next
  }
  return targetNodeList
};



//递归
var reverseList = function (head) {
  if (!head || !head.next) return head
  const pre = reverseList(head.next)
  head.next.next=head
  head.next=null
  return pre
};

const { generateListNode } = require('./generateListNode')
const list = new generateListNode()
list.insert(1)
list.insert(2)
 list.insert(3)
 list.insert(4)
console.log(list.head);
console.log(reverseList(list.head));