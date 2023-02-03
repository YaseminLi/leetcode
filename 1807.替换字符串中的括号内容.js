/*
 * @lc app=leetcode.cn id=1807 lang=javascript
 *
 * [1807] 替换字符串中的括号内容
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
// knowledge转化成obj
// 左括号，startIndex
// 右括号，endIndex
var evaluate = function (s, knowledge) {
  const obj = {};
  knowledge.forEach((item) => {
    obj[item[0]] = item[1];
  });
  let startIndex = null;
  let endIndex = null;
  let key = "";
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === "(") {
      // 左括号
      startIndex = i;
    } else if (s[i] === ")") {
      // 右括号
      endIndex = i;
      const replaceValue = obj[key] || "?";
      const addIndex = replaceValue.length - key.length - 2; // 替换值后，i的位置变化
      // 替换字符串
      s = s.replace(`(${key})`, replaceValue);
      startIndex = null;
      endIndex = null;
      key = "";
      i += addIndex;
    } else if (startIndex != null) {
      // 字符且有左括号
      key += s[i];
    }
  }
  return s;
};
// @lc code=end
console.log(
  evaluate("(name)is(age)yearsold", [
    ["name", "bob"],
    ["age", "two"],
  ])
); //"bobistwoyearsold"
console.log(evaluate("hi(name)", [["a", "b"]])); //"hi?"
console.log(evaluate("(a)(a)(a)aaa", [["a", "yes"]])); //"yesyesyesaaa"
