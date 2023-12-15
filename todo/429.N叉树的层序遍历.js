/**
 * 
给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。

树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */

// bfs 同102二叉树的层序遍历
 var levelOrder = function(root) {
  if(!root)return[]
  const ret=[]
  const queue=[root]
  while(queue.length>0){
      const arr=[] //存储当前节点
      let count=queue.length
      while(count--){
          const node=queue.shift()
          arr.push(node.val)
          if(node.children&&node.children.length>0){
                  queue.push(...node.children)
          }
      }
      ret.push(arr)
  }
  return ret
  
};