/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
链接：https://leetcode-cn.com/problems/merge-two-sorted-lists
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//如果l1或者l2为空，直接返回存在的那个
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var mergeTwoLists = function (l1, l2) {
    if (!(l1 && l2)) {
        return l1 || l2
    }
    let list = null
    let current = null
    while (l1 || l2) {
        let min = ''
        if (!l1) {
            min = l2
            l2 = l2.next
        } else if (!l2) {
            min = l1
            l1 = l1.next
        } else {
            if (l1.val <= l2.val) {
                min = l1
                l1 = l1.next
            } else {
                min = l2
                l2 = l2.next
            }
        }

        if (list === null) {
            list = new ListNode(min.val)
            current = list
        } else {
            min.next = null
            current.next = min
            current = current.next
        }
    }
    return list
};



console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));