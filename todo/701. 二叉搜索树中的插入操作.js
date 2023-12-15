/**
 * 给定二叉搜索树（BST）的根节点和要插入树中的值，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 输入数据保证，新值和原始二叉搜索树中的任意节点值都不同。
注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回任意有效的结果
链接：https://leetcode-cn.com/problems/insert-into-a-binary-search-tree
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const { BST } = require('./generateTreeNode')
const bst = new BST();
bst.insert(13);
bst.insert(21);
bst.insert(15);
bst.insert(29);
// bst.insert(3);

console.log(bst);
var insertIntoBST = function (root, val) {
  if(!root){
    return new TreeNode(val)
  }
  let current = root
  while (current) {
    if (val < current.val) {
      if (current.left) {
        current = current.left
      } else {
        current.left = new TreeNode(val)
        break
      }
    } else {
      if (current.right) {
        current = current.right
      } else {
        current.right = new TreeNode(val)
        break
      }
    }
  }
  return root
};
console.log(insertIntoBST(bst.root, 5))
console.log(insertIntoBST(null, 5))