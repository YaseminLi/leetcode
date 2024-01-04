/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和 https://leetcode.cn/problems/3sum-closest/description/
 * 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
 * 返回这三个数的和。
 * 假定每组输入只存在恰好一个解。
 * 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 */

// @lc code=start

/**
 * 双指针，固定一个数，找另外两个数是双指针
 * 先排序
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  const len = nums.length

  let res = Infinity;
  for (let i = 0; i < len; i += 1) {
    let left = i + 1
    let right = len - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum
      }
      if (sum === target) {
        return res
      } else if (sum < target) {
        left += 1
      } else {
        right -= 1
      }
    }
  }

  return res
};
// @lc code=end
console.log(threeSumClosest([-1, 2, 1, -4], 1));//2
console.log(threeSumClosest([0, 0, 0], 1));//0

