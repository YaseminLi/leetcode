/**
 * 给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
每条从根节点到叶节点的路径都代表一个数字：

例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
计算从根节点到叶节点生成的 所有数字之和 。

叶节点 是指没有子节点的节点。

链接：https://leetcode-cn.com/problems/sum-root-to-leaf-numbers
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//dfs
 var sumNumbers = function(root) {
   if(!root) return 0
   let sum=0

  const getNodeSum=(node,prev)=>{
    if(!node.left&&!node.right){
      sum=sum+(prev+node.val-0)
    }else {
      node.left&&getNodeSum(node.left,prev+node.val)
      node.right&&getNodeSum(node.right,prev+node.val)
    }
  }
  getNodeSum(root,'')
 return sum
  
};