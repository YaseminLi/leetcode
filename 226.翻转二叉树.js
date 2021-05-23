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
 * @return {TreeNode}
 */

// 子树为nuLL?
var invertTree = function (root) {
  if (!root) return root
  const queue = [root.left, root.right]
  while (queue.length) {
    // 交换前两个
    const left = queue[0]
    const right = queue[1]
    if (left && right) {
      [left.val, right.val] = [right.val, left.val]
      queue.push(left.left, right.right, left.right, right.left)
    }

    queue.shift()
    queue.shift()
  }
};


// 层序遍历
var invertTree = function (root) {
  if (root == null) {
    return root;
  }
  const queue = [root]
  while (queue.length) {
    const cur = queue.shift()
    [cur.left,cur.right] = [cur.right,cur.left]
    if (cur.left) {
      queue.push(cur.left)
    }
    if (cur.right) {
      queue.push(cur.right)
    }

  }
  return root
};

//递归
var invertTree = function (root) {
  if (root == null) {
    return root;
  }
  [root.left,root.right]=[root.right,root.left]
  invertTree(root.left)
  invertTree(root.right)
  return root
};


