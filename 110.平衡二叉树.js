/**
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
本题中，一棵高度平衡二叉树定义为：一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
示例 1:给定二叉树 [3,9,20,null,null,15,7] 返回true
链接：https://leetcode-cn.com/problems/balanced-binary-tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 递归方法，分别计算左右子树的高度来比较
var isBalanced = function (root) {
  if (!root) {
    return true
  }
  function height (node) {
    if (!node) return 0
    return 1 + Math.max(height(node.left), height(node.right))
  }
  if (!root) return true
  return Math.abs(height(root.left) - height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}

// 从下向上，子树不平衡时就结束
var isBalanced = function (root) {
  return balanceRoot(root) !== -1
  function balanceRoot (node) {
    if (!node) {
      return 0
    }
    const left = balanceRoot(node.left)
    const right = balanceRoot(node.right)
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1
    }
    return Math.max(left, right) + 1
  }
}

