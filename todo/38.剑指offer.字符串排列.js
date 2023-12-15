/**
 * 输入一个字符串，打印出该字符串中字符的所有排列。

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

示例:

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof
 * @param {string} s
 * @return {string[]}
 */

// 回溯
var permutation = function (s) {
  const ret =new Set()
  const used = {}
  const dfs = str => {
    if (str.length === s.length) {
      ret.add(str)
      return
    }
    for (let i = 0; i < s.length; i += 1) {
      if (used[i]) continue
      used[i] = true
      dfs(str+s[i])
      used[i] = false
    }
  }
  dfs('')
  return [...ret]
};

console.log(permutation('abc'));
console.log(permutation('aab'));