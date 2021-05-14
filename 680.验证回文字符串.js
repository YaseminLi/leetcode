/**
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

示例 1:

输入: "aba"
输出: True
示例 2:

输入: "abca"
输出: True
解释: 你可以删除c字符。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-palindrome-ii
 * @param {string} s
 * @return {boolean}
 */

// 双指针对向,不相等时，删除左或右后判断是否回文
var validPalindrome = function (s) {
  const isPalindrome = (s, l, r) => {
    while (l < r) {
      if (s[l] !== s[r]) {
        return false
      } else {
        l += 1
        r -= 1
      }
    }
    return true
  }
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1)
    } else {
      l += 1
      r -= 1
    }
  }
  return true
};

console.log(validPalindrome("abca"));
console.log(validPalindrome("abc"));
console.log(validPalindrome("aba"));
console.log(validPalindrome("abcca"));
console.log(validPalindrome("abcdca"));
console.log(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"));