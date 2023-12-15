/**
 * 计算给定二叉树的所有左叶子之和。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 没有子节点的才叫叶子
var sumOfLeftLeaves = function (root) {
 

  const calLeft=(root,isLeft)=>{
    if(!root){
      return 0
    }
      if(!root.left&&!root.right){
        if(isLeft){
          return root.val
        }
        return 0
      }
      return calLeft(root.left,true)+calLeft(root.right,false)
  }

  return calLeft(root,false)
};
