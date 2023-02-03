/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
//0-0
//1-1
//2-1
//3-2
var tribonacci = function (n) {
  const arr = [0, 1, 1];
  for (let i = 3; i <= n; i += 1) {
    arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
  }

  return arr[n];
};
// @lc code=end
console.log(tribonacci(4)); // 4
console.log(tribonacci(25)); // 1389537
