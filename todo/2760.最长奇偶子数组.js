/*
 * @lc app=leetcode.cn id=2760 lang=javascript
 *
 * [2760] 最长奇偶子数组
 * 给你一个下标从 0 开始的整数数组 nums 和一个整数 threshold 。

请你从 nums 的子数组中找出以下标 l 开头、下标 r 结尾 (0 <= l <= r < nums.length) 且满足以下条件的 最长子数组 ：

nums[l] % 2 == 0
对于范围 [l, r - 1] 内的所有下标 i ，nums[i] % 2 != nums[i + 1] % 2
对于范围 [l, r] 内的所有下标 i ，nums[i] <= threshold
以整数形式返回满足题目要求的最长子数组的长度。

注意：子数组 是数组中的一个连续非空元素序列。
输入：nums = [3,2,5,4], threshold = 5
输出：3
解释：在这个示例中，我们选择从 l = 1 开始、到 r = 3 结束的子数组 => [2,5,4] ，满足上述条件。
因此，答案就是这个子数组的长度 3 。可以证明 3 是满足题目要求的最大长度。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function (nums, threshold) {
  let maxLength = -Infinity
  let curLength = 0
  for (let i = 0; i < nums.length; i += 1) {
    const item = nums[i]
    if (item > threshold) {
      maxLength = Math.max(maxLength, curLength)
      curLength = 0
      continue
    }
    if (curLength && (nums[i] % 2 == nums[i - 1] % 2)) {
      maxLength = Math.max(maxLength, curLength)
      curLength = 0
    }
    if (item % 2 && curLength || item % 2 === 0) {
      curLength += 1
    }
  }
  maxLength = Math.max(maxLength, curLength)
  return maxLength
};
// @lc code=end
console.log(longestAlternatingSubarray([3, 2, 5, 4], 5));//3
console.log(longestAlternatingSubarray([1, 2], 2));//1
console.log(longestAlternatingSubarray([2, 3, 4, 5], 4));//3
console.log(longestAlternatingSubarray([2, 2], 18));//1
console.log(longestAlternatingSubarray([4, 10, 3], 10));//2
