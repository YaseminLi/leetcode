/*
 * @lc app=leetcode.cn id=2828 lang=javascript
 *
 * [2828] 判别首字母缩略词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
  let str=""
  words.forEach(item=>str+=item[0])
  return str===s
};
// @lc code=end
console.log(isAcronym(["alice","bob","charlie"],"abc"));//true
console.log(isAcronym(["an","apple","abc"],"a"));//false
console.log(isAcronym(["never","gonna","give","up","on","you"],"ngguoy"));//true

