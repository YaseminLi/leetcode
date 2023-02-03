/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// 二分缩小范围
var mySqrt = function (x) {
  if ([0, 1].includes(x)) return x;

  let left = 0;
  let right = x;
  while (left < right) {
    if (left + 1 === right) {
      return left;
    }
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === x) return mid;
    if (mid * mid > x) {
      right = mid;
    } else if (mid * mid < x) {
      left = mid;
    }
  }
  return 0;
};
// @lc code=end

console.log(mySqrt(4)); //2
console.log(mySqrt(8)); //2
console.log(mySqrt(1)); //1
console.log(mySqrt(16)); //1
console.log(mySqrt(26)); //1
