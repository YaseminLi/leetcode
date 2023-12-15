

/**
 * Definition for singly-linked list.
 *  * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
链接：https://leetcode-cn.com/problems/merge-two-sorted-lists
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 两个指针遍历
var mergeTwoLists = function (l1, l2) {
    if (!(l1 && l2)) return l1 || l2

    let minList = null
    let minListTail = null
    while (l1 && l2) {
        let newNode = null
        if (l1.val < l2.val) {
            newNode = l1
            l1 = l1.next
        }else if (l2.val <= l1.val) {
            newNode = l2
            l2 = l2.next
        }
        if (!minList) {
            minList = newNode
            minListTail = newNode
        } else {
            minListTail.next = newNode
            minListTail = newNode
        }
    }
    minListTail.next = l1 || l2
    return minList
};


// 递归
var mergeTwoLists=(l1,l2)=>{
    if(!(l1&&l2))return l1||l2 
    if(l1.val<=l2.val){
        l1.next=mergeTwoLists(l1.next,l2)
        return l1
    }
    if(l2.val<l1.val){
        l2.next=mergeTwoLists(l2.next,l1)
        return l2
    }
}

const { generateListNode } = require('./generateListNode')

const list1 = new generateListNode()
list1.insert(1)
list1.insert(2)
list1.insert(4)

const list2 = new generateListNode()
list2.insert(1)
list2.insert(3)
list2.insert(4)
//  console.log(list1.head,list2.head);
console.log(mergeTwoLists(list1.head, list2.head));