/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和 https://leetcode-cn.com/problems/sum-of-square-numbers
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。
 * 
 * 输入：c = 5
 * 输出：true
 * 解释：1 * 1 + 2 * 2 = 5
 * 
 * 示例 2：
 * 输入：c = 
 * 输出：false
 */

// @lc code=start
/**
 * 双指针
 * 最小值为0,最大值为floor sqrt(c)
 * 两数的平方求和，与c比较。>c,较大值减小，<c较小值增大
 * 因为最多只需要遍历一次 0~sqrt(target)，所以时间复杂度为 O(sqrt(target))。又因为只使用了两个额外的变量，因此空间复杂度为 O(1)。
 */
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let min = 0
  let max = Math.floor(Math.sqrt(c))
  while (min <= max) {
    const sum = min * min + max * max
    if (sum === c) {
      return true
    } else if (sum < c) {
      min += 1
    } else {
      max -= 1
    }
  }
  return false
};
// @lc code=end
console.log(judgeSquareSum(5));//true
console.log(judgeSquareSum(2));//false
