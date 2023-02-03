/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// // 遍历字符串
// //字母就更新当前字符串
// //空格，记录当前字符串，然后清空当前字符串
// var lengthOfLastWord = function (s) {
//   let lastWord = "";
//   let curString = "";
//   for (let i = 0; i < s.length; i += 1) {
//     if (s[i] !== " ") {
//       curString += s[i];
//     } else {
//       lastWord = curString || lastWord;
//       curString = "";
//     }
//   }
//   if (curString) {
//     lastWord = curString;
//   }
//   return lastWord.length;
// };

// 以空格分割，取最后一个字符串
var lengthOfLastWord = function (s) {
  const arr = s.split(" ");
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] !== "") return arr[i].length;
  }
  return 0;
};
// @lc code=end

console.log(lengthOfLastWord("Hello World")); //5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); //4
console.log(lengthOfLastWord("luffy is still joyboy")); //6
