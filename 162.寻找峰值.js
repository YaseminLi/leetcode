/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 * 峰值元素是指其值严格大于左右相邻值的元素。

给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。

你可以假设 nums[-1] = nums[n] = -∞ 。

你必须实现时间复杂度为 O(log n) 的算法来解决此问题。
输入：nums = [1,2,3,1]
输出：2
解释：3 是峰值元素，你的函数应该返回其索引 2。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// logN 二分法

var findPeakElement = function (nums) {
  const n = nums.length;
  let left = 0, right = n - 1, ans = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (compare(nums, mid - 1, mid) < 0 && compare(nums, mid, mid + 1) > 0) {
      ans = mid;
      break;
    }
    if (compare(nums, mid, mid + 1) < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
}

// 辅助函数，输入下标 i，返回一个二元组 (0/1, nums[i])，[下标是否在范围内，下标处的值]
// 方便处理 nums[-1] 以及 nums[n] 的边界情况
const get = (nums, idx) => {
  if (idx === -1 || idx === nums.length) {
    return [0, 0];
  }
  return [1, nums[idx]];
}

// 比较两个值大小 idx1和idx2  1-idx1大 0-相等 -1-idx2大
const compare = (nums, idx1, idx2) => {
  const num1 = get(nums, idx1);
  const num2 = get(nums, idx2);
  //若有一个不在范围内，则在范围内的数大
  if (num1[0] !== num2[0]) {
    return num1[0] > num2[0] ? 1 : -1;
  }
  if (num1[1] === num2[1]) {
    return 0;
  }
  return num1[1] > num2[1] ? 1 : -1;
}
// @lc code=end
console.log(findPeakElement([1, 2, 3, 1]));//2
// console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));//1或5

