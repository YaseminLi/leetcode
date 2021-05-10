/**
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 * 二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层序遍历结果：

[
  [3],
  [9,20],
  [15,7]
]

链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

//递归 dfs
 var levelOrder = function(root) {
  const ret=new Array()

  const perLevelOrder=(node,level)=>{
      if(!node)return
      if(!ret[level]){
          ret[level]=[node.val]
      }else {
          ret[level].push(node.val)
      }
      perLevelOrder(node.left,level+1)
      perLevelOrder(node.right,level+1)
  }
  perLevelOrder(root,0)
return ret
};

//bfs
var levelOrder = function(root) {
  if(!root) return []
  const ret=[]
  const queue=[root]

  while(queue.length>0){
    const arr=[] //当前层的节点
    let count=queue.length
    while(count--){
        const node=queue.shift()
        arr.push(node.val)
        node.left&&queue.push(node.left)
        node.right&&queue.push(node.right)
    }

    ret.push(arr)
  }

return ret
};