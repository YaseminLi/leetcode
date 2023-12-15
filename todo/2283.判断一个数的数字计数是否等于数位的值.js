/*
 * @lc app=leetcode.cn id=2283 lang=javascript
 *
 * [2283] 判断一个数的数字计数是否等于数位的值
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  if (num.length === 1 && num !== "0") return false;
  const obj = {};
  for (let i = 0; i < num.length; i++) {
    if (obj[num[i]] != null) {
      obj[num[i]] = obj[num[i]] + 1;
    } else {
      obj[num[i]] = 1;
    }
  }
  for (let j = 0; j < num.length; j++) {
    if (
      (num[j] - 0 === 0 && obj[j] != null) ||
      (num[j] - 0 !== 0 && obj[j] !== num[j] - 0)
    )
      return false;
  }
  return true;
};
// @lc code=end
console.log(digitCount("1210")); //true
console.log(digitCount("030")); //false
console.log(digitCount("1")); //false
console.log(digitCount("89")); //false
