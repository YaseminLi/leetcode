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

 // 递归
var maxDepth = function(root) {
    if (root == null) {
        return 0;
      } else {
        const leftDepth = maxDepth(root.left);
        const rightDepth = maxDepth(root.right);
        const childDepth = leftDepth > rightDepth ? leftDepth : rightDepth;
        return childDepth + 1;
      }
};
  
  // BFS广度优先
//   function maxDepth(root) {
//     if (root == null) {
//       return 0;
//     }
//     let depth = 0; // 记录层数，即深度
//     let queue = [root]; // 存储当前层的节点
//     while (queue.length) {
//       depth += 1; // 当前层数存在节点，depth+1
//       let levelNum = queue.length; // 当前层的节点数
//       // 当前层有节点时必做的事情
//       for (let i = levelNum; i > 0; i--) {
//         const current = queue.shift(); // 取出当前层的第一个节点
//         if (current.left) {
//           queue.push(current.left);
//         }
//         if (current.right) {
//           queue.push(current.right); // 当前节点的左右子节点入列
//         }
//       }
//     }
//     return depth;
//   }