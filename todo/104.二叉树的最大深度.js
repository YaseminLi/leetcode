/**
 * 给定二叉树 [3,9,20,null,null,15,7]，返回3
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
// 深度优先搜索

// 递归
var maxDepth = function(root) {
   if(!root) return 0
   const leftDepth=1+maxDepth(root.left)
   const rightDepth=1+maxDepth(root.right)
   return Math.max(leftDepth,rightDepth)
};
