/*
 * @lc app=leetcode.cn id=2319 lang=javascript
 *
 * [2319] 判断矩阵是否是一个 X 矩阵
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
// 遍历数组 数组长度为numebr.length len
// 数组第i(index)项number[i]中的每个元素需满足 number[i][i]非0 number[i][len-i-1]非0,其他为0
var checkXMatrix = function (grid) {
  const len = grid.length;
  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len; j += 1) {
      if (
        (j === i && grid[i][j] === 0) ||
        (j === len - i - 1 && grid[i][j] === 0) ||
        (j !== i && j !== len - i - 1 && grid[i][j] !== 0)
      ) {
        return false;
      }
    }
  }
  return true;
};
// @lc code=end

console.log(
  checkXMatrix([
    [2, 0, 0, 1],
    [0, 3, 1, 0],
    [0, 5, 2, 0],
    [4, 0, 0, 2],
  ])
); //true
console.log(
  checkXMatrix([
    [5, 7, 0],
    [0, 3, 1],
    [0, 5, 0],
  ])
); //false
