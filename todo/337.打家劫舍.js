/**
 * 二叉树房子，如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。
 * https://leetcode-cn.com/problems/house-robber-iii/
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

 // 只想到了递归，子树以及隔代子树的选中状态想不通怎么确定。如节点选中时，第二层孩子不可以选，第三层可选可不选，后面层数能不能选要根据上面一层的状态决定，所以……

 // 官方
 // 每个节点都有两种状态，递归计算每个节点两种状态下的值,f选中，g未选中
var rob = function(root) {
    const f=new Map() // 节点选中的值存储
    const g=new Map() // 节点未选中的值存储

    const dfs=(node)=>{
            if(node==null){
                return
            }
            dfs(node.left)
            dfs(node.right)
            // 当前节点选中时，左右节点都不能选
            f.set(node,node.val+(g.get(node.left)||0)+(g.get(node.right)||0))
            // 当前节点未选中时，左右节点选中不选中都可
            g.set(node,Math.max(f.get(node.left)||0,g.get(node.left)||0)+Math.max(f.get(node.right)||0,g.get(node.right)||0))
    }
    dfs(root)
    return Math.max(f.get(root)||0,g.get(root)||0)
}; //112ms 441.mb 后序遍历，时间n 递归n 哈希映射n

// 优化,不用哈希存储了，直接将左右孩子的值返回给上一个节点
var rob = function(root) {
    const dfs=(node)=>{
            if(node==null){
                return [0,0]
            }
            const l=dfs(node.left)
            const r=dfs(node.right)
            const selected=node.val+l[1]+r[1]
            const notSelected=Math.max(l[0],l[1])+Math.max(r[0],r[1])
            return [selected,notSelected]
    }
    const result=dfs(root)
    return Math.max(result[0],result[1])
};// 后序遍历，时间n，递归n
