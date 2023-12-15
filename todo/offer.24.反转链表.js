/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// old当前遍历的节点
// temp 暂存当前节点
// new 新的list头
var reverseList = function (head) {
  if (!head || !head.next) return head
  let old = head
  let newList=null
  while(old){
    let temp=old
    old=old.next

    temp.next=newList
    newList=temp
  }

  return newList
}


    // const tail=head
    // let curNode=head.next
    // let nextNode=null
    // while(curNode){
    //     nextNode=curNode.next
    //     curNode.next=head
    //     tail.next=nextNode
    //     head=curNode
    //     curNode=nextNode
    // }
    // return head