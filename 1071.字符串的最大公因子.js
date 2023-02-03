/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// 最大公约数 gcd=(a,b)=>(0===b?a:gcd(b,a%b))
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";
  const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
  return str1.substring(0, gcd(str1.length, str2.length));
};
// @lc code=end
console.log(gcdOfStrings("ABCABC", "ABC")); //"ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")); //"AB"
console.log(gcdOfStrings("LEET", "CODE")); //""
