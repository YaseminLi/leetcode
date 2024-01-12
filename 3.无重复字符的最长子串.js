/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 输入: s = "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// map key：字符，value：遍历过的字符串中最晚出现的index
// startIdx： 当前长度计算的开始index
// 遍历字符串，查找是否存在map中
// 存在且大于等于startIdx，更新maxLength,curLength,startIdx
// 不存在,当前长度+1，记录key value
// var lengthOfLongestSubstring = function (s) {
//   let maxLength = -Infinity
//   let map = new Map()
//   let curLength = 0
//   let startIdx=0
//   for (let i = 0; i < s.length; i += 1) {
//     const curStr = s[i]
//     const exitIdx=map.get(curStr)
//     if (exitIdx!=null&&exitIdx>=startIdx) {
//       // 存在
//       maxLength=Math.max(maxLength,curLength)
//       curLength=i-exitIdx
//       startIdx=exitIdx
//     } else {
//       // 不存在，当前长度+1，map中记录
//       curLength += 1
//     }
//     map.set(curStr, i)
//   }

//   return Math.max(curLength,maxLength)
// };

// 优化： 只使用startIdx
var lengthOfLongestSubstring = function (s) {
  if(s.length<=1) return s.length
  let maxLength = -Infinity
  let map = new Map()
  let startIdx=0
  for (let i = 0; i < s.length; i += 1) {
    const curStr = s[i]
    const exitIdx=map.get(curStr)
    if (exitIdx!=null&&exitIdx>=startIdx) {
      // 存在
      const curLength=i-startIdx
      maxLength=Math.max(maxLength,curLength)
      startIdx=exitIdx+1
    }

    map.set(curStr, i)
  }
  return Math.max(s.length-startIdx,maxLength)
};
// @lc code=end

console.log(lengthOfLongestSubstring("anviaj"));//5
console.log(lengthOfLongestSubstring('pwwkew'));//3
console.log(lengthOfLongestSubstring('abcabcbb'));//3
console.log(lengthOfLongestSubstring('bbbbbb'));//1
console.log(lengthOfLongestSubstring('aab'));//2
console.log(lengthOfLongestSubstring('abba'));//2
console.log(lengthOfLongestSubstring(''));//0
console.log(lengthOfLongestSubstring(' '));//1
console.log(lengthOfLongestSubstring('au'));//2
