/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

// 一对括号以一对正负数表示，如（） 用-1 和1表示。 左括号用负数，右括号用正数
// 负数直接放入
// 放入正数时，若最后一项不是相应的负数，则先出现了右括号，not valid
// 若最后一项是相应负数，将最后一推出
var isValid = function (s) {
  const map = {
    "(": -1,
    ")": 1,
    "[": -2,
    "]": 2,
    "{": -3,
    "}": 3,
  };

  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    if (map[s[i]] < 0) {
      stack.push(map[s[i]]);
    } else if (stack[stack.length - 1] + map[s[i]] === 0) {
      // 有相应负数，推出最后一项
      stack.pop();
    } else {
      // 没有相应负数
      return false;
    }
  }
  return stack.length === 0;
};
// @lc code=end

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
