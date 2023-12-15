/*
 * @lc app=leetcode.cn id=2413 lang=javascript
 *给你一个正整数 n ，返回 2 和 n 的最小公倍数（正整数）。
 * [2413] 最小偶倍数 1 <= n <= 150
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  if (n % 2 === 1) {
    return 2 * n;
  }
  return n;
};
// @lc code=end
console.log(smallestEvenMultiple(5)); //10
console.log(smallestEvenMultiple(6)); //6
