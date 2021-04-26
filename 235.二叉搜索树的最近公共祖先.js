/**
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6 
解释: 节点 2 和节点 8 的最近公共祖先是 6。

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
  const val=root.val
  if(p.val<val&&q.val<val) return lowestCommonAncestor(root.left,p,q)
  if(p.val>val&&q.val>val) return lowestCommonAncestor(root.right,p,q)
  return root
};


const { BST } = require('./generateTreeNode')
const bst = new BST();
const arr=[6,2,8,0,4,7,9,null,null,3,5]
arr.forEach(item=>{
  bst.insert(item);
})

console.log(lowestCommonAncestor(bst.root,2,8));
console.log(lowestCommonAncestor(bst.root,2,4));
console.log(lowestCommonAncestor(bst.root,2,1));