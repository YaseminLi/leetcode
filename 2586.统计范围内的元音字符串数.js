/*
 * @lc app=leetcode.cn id=2586 lang=javascript
 *
 * [2586] 统计范围内的元音字符串数
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  let count = 0
  const vowelList=['a','e','i','o','u']
  for (let i = left; i <= right; i += 1) {
    const item=words[i]
    if(vowelList.includes(item[0])&&vowelList.includes(item[item.length-1])){
      count+=1
    }
  }
  return count
};
// @lc code=end
console.log(vowelStrings(["are", "amy", "u"], 0, 2));//2
console.log(vowelStrings(["hey", "aeo", "mu", "ooo", "artro"], 1, 4));//3
