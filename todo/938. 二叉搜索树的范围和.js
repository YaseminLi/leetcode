/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 给定二叉搜索树的根结点 root，返回 L 和 R（含）之间的所有结点的值的和。

二叉搜索树保证具有唯一的值。

输入：root = [10,5,15,3,7,null,18], L = 7, R = 15
输出：32

链接：https://leetcode-cn.com/problems/range-sum-of-bst
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let sum=0
    let add=false
    order(root)
    function order(node){
        if(node){
            order(node.left)
            if(node.val===L){
                add=true
            }
            sum+=add?node.val:0
            if(node.val===R){
                add=false
            }
            order(node.right)
        }
    }
    return sum
};