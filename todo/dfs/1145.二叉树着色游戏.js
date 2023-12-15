/*
 * @lc app=leetcode.cn id=1145 lang=javascript
 *
 * [1145] 二叉树着色游戏
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
// 一号染色节点x，二号可选的范围有三部分：x的左子树，x的右子树，x的父节点子树，这三部分哪个节点树最多二号就可选择哪个
// x的左子树大小 lxz
// x的右子树大小 rxz
// x的父节点子树大小  n-1-lxz-rxz
// 设n2为二号选手最多可渲染的子节点数 n2=Max(lxz,rxz,n-1-lxz-rxz)
// 要满足二号选手必胜，则n2>n1  n2>n-n2   2*Max(lxz,rxz,n-1-lxz-rxz)>n
// 深度优先计算节点子树大小
var btreeGameWinningMove = function(root, n, x) {
    let lxz=0
    let rxz=0

     
    const dfs=(node)=>{
        if(!node) return 0
        const ls=dfs(node.left)
        const rs=dfs(node.right)
        if(node.val===x){
            lxz=ls
            rxz=rs
        }

        return ls+rs+1
    }
    dfs(root)

    return 2*Math.max(lxz,rxz,n-1-lxz-rxz)>n

};
// @lc code=end

console.log(btreeGameWinningMove([1,2,3,4,5,6,7,8,9,10,11],11,3));//true
console.log(btreeGameWinningMove([1,2,3],3,1));//false

