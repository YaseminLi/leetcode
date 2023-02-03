/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

// 双指针，非字母字符跳过，大写转小写
var isPalindrome = function (s) {
  for (
    let left = 0, right = s.length - 1;
    left <= right && right < s.length;

  ) {
    if (!/[A-Za-z0-9]/.test(s[left])) {
      left += 1;
      continue;
    }
    if (!/[A-Za-z0-9]/.test(s[right])) {
      right -= 1;
      continue;
    }
    if (s[left].toLocaleLowerCase() === s[right].toLocaleLowerCase()) {
      left += 1;
      right -= 1;
      continue;
    }
    return false;
  }
  return true;
};
// @lc code=end

console.log(isPalindrome("A man, a plan, a canal: Panama")); //true
console.log(isPalindrome("race a car")); //false
console.log(isPalindrome(" ")); //true
console.log(isPalindrome("0p")); //false
