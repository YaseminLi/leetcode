/**
 * 给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值
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

// 存两个变量：一个较小值，一个较大值
// 遍历二叉树，与当前变量的节点比较，更新较大值与较小值，最后计算两个变量差即可
// 这个不对
// var getMinimumDifference = function (root) {
//   let min = null, max = null
//   const calMinMax = function (node) {
//     // 当前节点的值与min\max比较
//     const val = node.val
//     if(val){
//       if (min == null) {
//         min = val
//       } else if (max == null) {
//         if(val>min){
//           max=val
//         }else{
//           max=min
//           min=val
//         }
//       }else if (val > max && val - max < max - min) {
//         min = max
//         max = val
//       } else if (val < min && min - val < max - min) {
//         max = min
//         min = val
//       } else if (min < val && val < max) {
//         if (val - min < max - val) {
//           max = val
//         } else {
//           min = val
//         }
//       }
//     }


//     node.left && calMinMax(node.left)
//     node.right && calMinMax(node.right)
//   }
//   root && calMinMax(root)
//   return max - min
// };

// 用数组来存储二叉树，对数组排序，找相邻的最小值
// 循环了三次……
var getMinimumDifference = function (root) {
  const arr = []
  let min = Math.pow(2, 53)
  const calMinMax = function (node) {
    const val = node.val
    if (val != null) {
      arr.push(val)
    }

    node.left && calMinMax(node.left)
    node.right && calMinMax(node.right)
  }
  root && calMinMax(root)
  arr.sort((a, b) => {
    return a - b
  })
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] < min) {
      min = arr[i] - arr[i - 1]
    }
  }
  return min
};

// 二叉树的中序遍历，中序遍历是二叉树从小到大节点值
var getMinimumDifference = function (root) {
  let pre = null;// 存储遍历的上一个节点
  let result = Math.pow(2, 53)
  const dfs = (root) => {
    if (root == null) {
      return
    }
    dfs(root.left)
    if (pre != null && root.val - pre < result) {
      result = root.val - pre
    }
    pre = root.val
    dfs(root.right)
  }
  dfs(root)
  return result;
}


const { BST } = require('./generateTreeNode')
const bst = new BST();
// bst.insert(1);
// bst.insert(null);
// bst.insert(5);
// bst.insert(3);
bst.insert(543);
bst.insert(384);
bst.insert(652);
bst.insert(null);
bst.insert(445);
bst.insert(null);
bst.insert(699);

console.log(getMinimumDifference(bst.root));