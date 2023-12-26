/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *整数数组 nums 按升序排列，数组中的值 互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    // const middle = left + (right - left) >> 1
    const middle = Math.floor((left + right) / 2)
    const middleIte = nums[middle]
    const rightIte = nums[right]
    const leftIte = nums[left]
    if (nums[middle] === target) {
      return middle
    } else if ((middleIte > target && rightIte >= target && middleIte > rightIte) || (middleIte < target && (rightIte >= target || rightIte < middleIte))) {
      // 缩减到右区间
      // 旋转的元素在右区间，(middleIte > target && rightIte >= target && middleIte > rightIte)
      // 旋转的元素不在右区间(middleIte < target && middle > leftIte)
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return -1
};
// @lc code=end
console.log(search([4, 5, 6, 7, 0, 1, 2,], 0));//4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));//-1
console.log(search([1], 0));//-1
console.log(search([5, 1, 3], 3));//2
console.log(search([1, 3], 3));//1
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8));//4

