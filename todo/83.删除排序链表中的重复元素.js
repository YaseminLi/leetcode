/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// head = [1,1,2,3,3] [1,2,3]
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const map = new Map()
  let cur = head
  while (cur) {
    const value = cur.value
    if (map.get(value)) {
      //删除
    } else {
      map.set(value, 1)
    }
  }
};
// @lc code=end
