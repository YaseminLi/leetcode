/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
示例：
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

链接：https://leetcode-cn.com/problems/add-two-numbers
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var addTwoNumbers = function (l1, l2) {
    let sum = new ListNode(0) //两数之和的链表
    let item = sum//两个数相加是否为两位数
    let isTwo = false
    while (l1 || l2 || isTwo) {
        let val = isTwo ? 1 : 0
        if (l1) {
            val += l1.val
            l1 = l1.next
        }
        if (l2) {
            val += l2.val
            l2 = l2.next
        }
        //判断相加是否为两位数
        if (val > 9) {
            val = val - 10
            isTwo = true
        } else {
            isTwo = false
        }
        item.next = new ListNode(val)
        item = item.next
    }
    return sum.next
}
let l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)
let l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)
// console.log(l1);
// console.log(l2);
console.log(addTwoNumbers(l1, l2));

