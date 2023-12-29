/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 * 给你一个正整数 num 。如果 num 是一个完全平方数，则返回 true ，否则返回 false 。
 * 完全平方数 是一个可以写成某个整数的平方的整数。换句话说，它可以写成某个整数和自身的乘积。
 * 不能使用任何内置的库函数，如  sqrt 。
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 0
  let right = num
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    const square = middle * middle
    if (square === num) {
      return true
    } else if (square < num) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return false
}

// let left = 0, right = num;
// while (left <= right) {
//     const mid = Math.floor((right - left) / 2) + left;
//     const square = mid * mid;
//     if (square < num) {
//         left = mid + 1;
//     } else if (square > num) {
//         right = mid - 1;
//     } else {
//         return true;
//     }
// }
// return false;

// @lc code=end
console.log(isPerfectSquare(16));//true
console.log(isPerfectSquare(14));//false

