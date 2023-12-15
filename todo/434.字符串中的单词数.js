/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  return s.split(" ")?.filter((item) => item)?.length || 0;
};
// @lc code=end
console.log(countSegments("Hello, my name is John")); //5
console.log(countSegments("")); //0
