/*
 * @lc app=leetcode.cn id=345 lang=javascript
[345] 反转字符串中的元音字母
 * 元音字母：a,e,i,o,u，编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 *  输入："hello"
 * 输出："holle"
 */

// @lc code=start

/**
 * 双指针
 * 一个指针从头向尾遍历，一个指针从尾到头遍历，当两个指针都遍历到元音字符时，交换这两个元音字符。
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  const arr = s.split('')
  let l = 0, r = s.length - 1
  while (l < r) {
    if (!vowels.has(arr[l])) {
      l += 1;
      continue
    }
    if (!vowels.has(arr[r])) {
      r -= 1;
      continue
    }
    [arr[r], arr[l]] = [arr[l], arr[r]]
    r -= 1
    l += 1
  }
  return arr.join('')
};
// @lc code=end
console.log(reverseVowels('hello'));

