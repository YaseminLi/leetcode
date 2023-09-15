/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 重复子字符串的长度从1开始，能被s.length整除的去判断是否为循环
var repeatedSubstringPattern = function (s) {
  let result = false;
  const len = s.length;
  for (let i = 1; i < len; i += 1) {
    if (len % i === 0) {
      //可以整除，判断是否循环
      const temp = s.slice(0, i); //循环体

      let isLoop=true

      for (let j = i, m = 0; j < len; j += 1) {
        // console.log(
        //   "---------- ~ repeatedSubstringPattern ~ temp:",
        //   temp,
        //   m,
        //   j
        // );
        if (temp[m] !== s[j]) {
          isLoop=false
          break
        } else {
          m += 1;
          if (m === i) {
            m = 0;
          }
        }
      }

      if(isLoop){
        return true
      }
    }
  }
  return result;
};
// @lc code=end
console.log(repeatedSubstringPattern("abab")); //true
console.log(repeatedSubstringPattern("aba")); //false
console.log(repeatedSubstringPattern("abcabcabcabc")); //true
