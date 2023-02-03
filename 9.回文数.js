/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// 双向指针遍历比较
var isPalindrome = function (x) {
  x += "";
  let startIndex = 0;
  let endIndex = x.length - 1;
  for (startIndex; startIndex <= endIndex; ) {
    if (x[startIndex] !== x[endIndex]) return false;
    startIndex += 1;
    endIndex -= 1;
  }
  return true;
};
// @lc code=end
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
