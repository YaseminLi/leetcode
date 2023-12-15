/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 * 思路和算法
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// var maxSubArray = function(nums) {
//   let pre = 0, maxAns = nums[0];
//   nums.forEach((x) => {
//       pre = Math.max(pre + x, x);
//       maxAns = Math.max(maxAns, pre);
//   });
//   return maxAns;
// };

var maxSubArray = function (nums) {
  let ans = nums[0]
  let sum = 0
  for (const n of nums) {
    console.log('sum', sum, n, ans);
    if (sum > 0) {
      //对结果有增加效果
      sum += n

    } else {
      // sum 小于0时，对结果没有增加效果
      sum = n
    }
    ans = Math.max(ans, sum)
  }
  return ans
};
// @lc code=end
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));//6
console.log(maxSubArray([1]));//1
console.log(maxSubArray([5, 4, -1, 7, 8]));//23

