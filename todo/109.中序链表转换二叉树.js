/**
 * 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。
本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
给定的有序链表： [-10, -3, 0, 5, 9],
一个可能的答案是：[0, -3, 9, -10, null, 5],
链接：https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// 快慢指针找中间节点
var sortedListToBST = function (head) {
  if (head == null) return null
  let slow = head
  let fast = head
  let preSlow
  while (fast && fast.next) {
    preSlow = slow
    slow = slow.next
    fast = fast.next.next
  }
  const root = new TreeNode(slow.val)
  if (preSlow) {
    preSlow.next = null //切断左子树和中点的联系
    root.left = sortedListToBST(head)
    root.right = sortedListToBST(slow.next)
  }
  return root
};