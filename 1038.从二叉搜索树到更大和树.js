/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 给出二叉搜索树的根节点，该二叉树的节点值各不相同，修改二叉树，使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。
 * 输入：[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
链接：https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var bstToGst = function (root) {
    // if (root.length === 0 || root.length === 1) {
    //     return root
    // }
    // let top = new TreeNode(root[0])
    // //将数组构造成二叉搜索树
    // for (let i = 1; i < root.length; i++) {
    //     if (root[i] === null) {
    //         continue
    //     }
    //     insert(top, root[i])
    //     //向以node为根节点的二叉树中插入值为val的节点
    //     function insert(node, val) {
    //         if (node === null) {
    //             return new TreeNode(val)
    //         }
    //         if (root[i] > node.val) {
    //             node.right = insert(node.right, val)
    //         } else {
    //             node.left = insert(node.left, val)
    //         }
    //         return node
    //     }
    // }

    //右中左遍历
    order(root, 0)
    function order(node, sum) {
        if (!node) {
            return sum
        }
        sum = order(node.right, sum)
        node.val = node.val + sum
        return order(node.left, node.val)

    }
    return root
}

