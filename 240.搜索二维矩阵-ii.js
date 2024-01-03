/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const len = matrix.length
  const binarySearch = (nums) => {
    const length = nums.length
    if (nums[0] > target || nums[length - 1] < target) {
      return false
    }
    if (nums[0] === target || nums[length - 1] === target) {
      return true
    }

    let left = 0
    let right = length - 1
    while (left <= right) {
      const middle = Math.floor((left + right) / 2)
      if (nums[middle] === target) {
        return true
      } else if (nums[middle] > target) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    }
    return false
  }

  let result = false
  for (let i = 0; i < len; i += 1) {
    const curList = matrix[i]
    const hasResult = binarySearch(curList)
    if (hasResult) {
      result = true
      break
    }

  }
  return result
};
// @lc code=end
console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5));//true
console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 20));//false
console.log(searchMatrix([[-1, 3]], 3));//true

