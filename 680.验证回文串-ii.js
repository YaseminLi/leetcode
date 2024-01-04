/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文串 II
 * https://leetcode-cn.com/problems/valid-palindrome-ii
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * 输入: "aba"
 * 输出: True
 * 
 * 输入: "abca"
 * 输出: True 解释: 你可以删除c字符。

 */

// @lc code=start

/**
 * 双指针
 * 一个指针从头到尾，一个指针从尾到头
 * 不相等时，判断删除一个后的字符，遍历后的不用再判断
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  const isPalindrome = (str) => {
    let left = 0
    let right = str.length - 1
    while (left <= right) {
      if (str[left] !== str[right]) {
        return false
      }
      left += 1
      right -= 1
    }
    return true
  }

  let start = 0
  let end = s.length - 1
  while (start <= end) {
    if (s[start] !== s[end]) {
      return isPalindrome(s.slice(start + 1, end + 1)) || isPalindrome(s.slice(start, end))
    }
    start += 1
    end -= 1
  }
  return true
};
// @lc code=end
console.log(validPalindrome("abca"));
console.log(validPalindrome("abc"));
console.log(validPalindrome("aba"));
console.log(validPalindrome("abcca"));
console.log(validPalindrome("abcdca"));
console.log(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"));

