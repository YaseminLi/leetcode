/*
 * @lc app=leetcode.cn id=421 lang=javascript
 *
 * [421] 数组中两个数的最大异或值
 * 给你一个整数数组 nums ，返回 nums[i] XOR nums[j] 的最大运算结果，其中 0 ≤ i ≤ j < n 。
 * 输入：nums = [3,10,5,25,2,8]
输出：28
解释：最大运算结果是 5 XOR 25 = 28.
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMaximumXOR = function (nums) {
//   let max = 0
//   for (let i = 0; i < nums.length; i += 1) {
//     for (let j = i + 1; j < nums.length; j += 1) {
//       const cur = nums[i] ^ nums[j]
//       // console.log("findMaximumXOR ～～～ cur:", cur)
//       max = Math.max(max, cur)
//     }
//   }
//   return max
// };
var findMaximumXOR = function (nums) {
  const HIGH_BIT = 30;
  let x = 0;
  for (let k = HIGH_BIT; k >= 0; --k) {
    const seen = new Set();
    // 将所有的 pre^k(a_j) 放入哈希表中
    for (const num of nums) {
      // 如果只想保留从最高位开始到第 k 个二进制位为止的部分
      // 只需将其右移 k 位
      seen.add(num >> k);
    }

    // 目前 x 包含从最高位开始到第 k+1 个二进制位为止的部分
    // 我们将 x 的第 k 个二进制位置为 1，即为 x = x*2+1
    const xNext = x * 2 + 1;
    let found = false;

    // 枚举 i
    for (const num of nums) {
      if (seen.has(xNext ^ (num >> k))) {
        found = true;
        break;
      }
    }

    if (found) {
      x = xNext;
    } else {
      // 如果没有找到满足等式的 a_i 和 a_j，那么 x 的第 k 个二进制位只能为 0
      // 即为 x = x*2
      x = xNext - 1;
    }
  }
  return x;
};
// @lc code=end
console.log(findMaximumXOR([3, 10, 5, 25, 2, 8]));//28
console.log(findMaximumXOR([14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70]));//127

