/**
 * 给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点
输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
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
var minDepth = function (root) {
  if (!root) return 0

  const leftDepth = minDepth(root.left)
  const rightDepth = minDepth(root.right)

  if (root.left && root.right) {
    return Math.min(leftDepth, rightDepth) + 1
  }
  
  if (!root.left && !root.right) {
    return 1
  }

  if (root.left) {
    return 1 + leftDepth
  }

  if (root.right) {
    return 1 + rightDepth
  }
};