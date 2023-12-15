/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// 递归
 var isSymmetric = function(root) {
  if(!root) return false
  const check=(left,right)=>{
      if(!left&&!right) return true
      if(left&&right){
      return left.val===right.val&&check(left.left,right.right)&&check(left.right,right.left)
      }
          return false
      
  }
 return check(root.left,root.right)
};

// 迭代
var isSymmetric = function(root) {
  if(!root) return false
  const queue=[root.left,root.right]
  while(queue.length>0){
    const m=queue.shift()
    const n=queue.shift()
    if(!m&&!n)continue
    if(!m||!n||m.val!==n.val) return false
    queue.push(m.left,n.right,m.right,n.left)
  }
  return true
};