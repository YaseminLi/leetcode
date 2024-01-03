/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 * 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。

假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。

你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 二分法，时间NlogN。题目对空间有限制，时间换空间
// 官方题解：https://leetcode.cn/problems/find-the-duplicate-number/solutions/261119/xun-zhao-zhong-fu-shu-by-leetcode-solution/
// 查找范围为1-n的数组
// 当前查找值为mid,计算nums中小于等于mid的数量count；
//count <=mid left=mid+1 
// count>mid right=mid-1 
// 为什么return left？
var findDuplicate = function (nums) {
  let left = 1
  let right = nums.length - 1
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    const count = nums.filter(item => item <= middle)?.length
    if (count <= middle) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return left
};
// @lc code=end
console.log(findDuplicate([1, 3, 4, 2, 2]));//2   1,2,3,4,5,6,6,7,
console.log(findDuplicate([3, 1, 3, 4, 2]));//3
console.log(findDuplicate([2, 2, 2, 2, 2]));//2
console.log(findDuplicate([1, 4, 4, 2, 4]));//4  1,2,4,4,4

