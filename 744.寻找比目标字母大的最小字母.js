/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 * 给你一个字符数组 letters，该数组按非递减顺序排序，以及一个字符 target。letters 里至少有两个不同的字符。

返回 letters 中大于 target 的最小的字符。如果不存在这样的字符，则返回 letters 的第一个字符。
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  if (target >= letters[letters.length - 1]) {
    return letters[0];
  }
  let left = 0
  let right = letters.length - 1
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    if (letters[middle].charCodeAt() <= target.charCodeAt()) {
      left = middle + 1
    } else {
      right = middle - 1
    }

  }
  return left > letters.length - 1 ? letters[0] : letters[left]

};
// @lc code=end
console.log(nextGreatestLetter(["c", "f", "j"], 'a'));//c
console.log(nextGreatestLetter(["c", "f", "j"], 'c'));//f
console.log(nextGreatestLetter(["x", "x", "y", "y"], 'z'));//x