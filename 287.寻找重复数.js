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
var findDuplicate = function (nums) {
  // nums.sort()
  // let left = 0
  // let right = nums.length - 1
  // while (left < right) {
  //   const middle = Math.floor((left + right) / 2)
  //   console.log("findDuplicate ～～～ middle:", middle, middle - 1, nums[middle], nums[middle - 1])
  //   if (nums[middle] === nums[middle - 1]) {
  //     return nums[middle]
  //   } else if ((nums[middle]) === middle) {
  //     right = middle - 1
  //   } else if ((nums[middle] - 1) === middle) {
  //     left = middle + 1
  //   }
  // }
  // return nums[right]
  const n = nums.length;
  let l = 1, r = n - 1, ans = -1;
  while (l <= r) {
    let mid = (l + r) >> 1;
    let cnt = 0;
    for (let i = 0; i < n; ++i) {
      cnt += nums[i] <= mid;
    }
    if (cnt <= mid) {
      l = mid + 1;
    } else {
      r = mid - 1;
      ans = mid;
    }
  }
  return ans;
};
// @lc code=end
// console.log(findDuplicate([1, 3, 4, 2, 2]));//2   1,2,3,4,5,6,6,7,
// console.log(findDuplicate([3, 1, 3, 4, 2]));//3
// console.log(findDuplicate([2, 2, 2, 2, 2]));//2
console.log(findDuplicate([1, 4, 4, 2, 4]));//4  1,2,4,4,4

