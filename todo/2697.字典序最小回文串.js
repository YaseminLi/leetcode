/*
 * @lc app=leetcode.cn id=2697 lang=javascript
 *
 * [2697] 字典序最小回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
  const arr = s.split('')
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    if (arr[left] !== arr[right]) {
      // 不相等，将大的字符换成小的
      if (arr[left].charCodeAt() > arr[right].charCodeAt()) {
        arr[left] = arr[right]
      } else {
        arr[right] = arr[left]
      }
    }
    left += 1
    right -= 1
  }
  return arr.join('')

};
// @lc code=end
console.log(makeSmallestPalindrome("egcfe"));//"efcfe"
console.log(makeSmallestPalindrome("abcd"));//"abba"
console.log(makeSmallestPalindrome("seven"));//"neven"

