/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。

叶子节点 是指没有子节点的节点

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/path-sum
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
//只有一个根节点不行
 var hasPathSum = function(root, targetSum) {
   if(!root) return false
   if(!root.left&&!root.right) return root.val===targetSum
    return hasPathSum(root.left,targetSum-root.val)||hasPathSum(root.right,targetSum-root.val)
};