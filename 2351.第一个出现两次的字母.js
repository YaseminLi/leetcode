/*
 * @lc app=leetcode.cn id=2351 lang=javascript
 *
 * [2351] 第一个出现两次的字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {character}
 */
// 遍历字符串，创建obj obj[s[i]]存在时，则s[i]为target
var repeatedCharacter = function (s) {
  const obj = {};
  let target = "";
  for (let i = 0; i < s.length; i += 1) {
    if (obj[s[i]]) {
      target = s[i];
      break;
    } else {
      obj[s[i]] = 1;
    }
  }
  return target;
};
// @lc code=end
console.log(repeatedCharacter("abccbaacz")); //c
console.log(repeatedCharacter("abcdd")); //d
