/*
 * @lc app=leetcode.cn id=2609 lang=javascript
 *
 * [2609] 最长平衡子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function (s) {
  let maxLength = 0
  let zeroCount = 0
  let oneCount = 0
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] == 0) {
      if (i === 0 || s[i - 1] ==1) {
        maxLength = Math.max(maxLength, Math.min(zeroCount, oneCount))
        zeroCount = 1
        oneCount = 0
      } else {
        zeroCount += 1
      }
    } else {
      oneCount += 1
    }
  };
  maxLength = Math.max(maxLength, Math.min(zeroCount, oneCount))
  return maxLength*2
}

// @lc code=end
console.log(findTheLongestBalancedSubstring("01000111"));//6
console.log(findTheLongestBalancedSubstring("00111"));//4
console.log(findTheLongestBalancedSubstring("111"));//0
