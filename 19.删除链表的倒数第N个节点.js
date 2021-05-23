/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
示例 2：

输入：head = [1], n = 1
输出：[]
示例 3：

输入：head = [1,2], n = 1
输出：[1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// 用快慢指针找到倒数第k+1个节点，将它的指针指向(k+1).next.next
var removeNthFromEnd = function (head, n) {
  // 先找到倒数第K+1个节点
  let fast = head
  let slow = null
  while (--n) {
    fast = fast.next
  }
  if (!fast.next) {
    return head.next
  }


  while (fast.next) {
    slow = slow ? slow.next : head
    fast = fast.next
  }
  slow.next = slow.next.next

  return head
};