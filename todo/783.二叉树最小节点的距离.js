/**
 * 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
 * 输入：root = [4,2,6,1,3]
输出：1
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

const { BST } = require('./generateTreeNode')
const bst = new BST();
bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);

console.log(bst);
// 不对，这个只能当前节点和左右节点比
// var minDiffInBST = function(root) {
//   let leftBinary=Infinity
//     let rightBinary=Infinity
//     if(root.left){
// leftBinary=Math.min((root.val-root.left.val),minDiffInBST(root.left))
//     }
//         if(root.right){
// rightBinary=Math.min((root.right.val-root.val),minDiffInBST(root.right))
//     }


//     return Math.min(leftBinary,rightBinary)
// };

//二叉搜索树，中序遍历可以将节点数字从小到大排列
var minDiffInBST = function (root) {
  const getVal = (node) => {
    if (!node) return []
    return [...getVal(node.left), node.val, ...getVal(node.right)]
  }

  const arr=getVal(root)
  let ret=Infinity
  for(let i=1;i<arr.length;i+=1){
    ret=Math.min(ret,arr[i]-arr[i-1])
  }
  return ret
};

console.log(minDiffInBST(bst.root));

