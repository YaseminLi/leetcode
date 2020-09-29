/**
 * 给定一个二叉树，返回它的 后序 遍历。
输入: [1,null,2,3]  
输出: [3,2,1]
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-postorder-traversal
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const { BST } = require('./generateTreeNode')
const bst = new BST();
bst.insert(13);
bst.insert(21);
bst.insert(15);
bst.insert(29);
bst.insert(3);

console.log(bst);

// 递归后序
var postorderTraversal = function (root) {
  const arr = []
  const fn = (node) => {
    node.left && fn(node.left)
    node.right && fn(node.right)
    arr.push(node.val)
  }
  root && fn(root)
  return arr
}

// console.log(postorderTraversal(bst.root));

//迭代后序
var postorderTraversal = function (root) {
  const arr = [] //遍历结果
  const stack = []// 已经遍历到但还未取值完的节点
  if(root)stack.push(root)
  while (stack.length) {
    root = stack.pop();
    if (root) {
      stack.push(root);
      stack.push(null);
      root.right && stack.push(root.right);
      root.left && stack.push(root.left);
    } else {
      arr.push(stack.pop().val);
    }
  }
  return arr
}
console.log(postorderTraversal(bst.root));