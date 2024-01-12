/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。


 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//遍历第一个单词，map key：字符 value：出现的次数
// 遍历第二个单词,map key：字符 value：出现的次数

// 遍历map 对比次数
var isAnagram = function (s, t) {
  if(s.length!==t.length) return false
  let result = true
  const sMap = new Map()
  const tMap = new Map()
  s.split('').forEach(item => {
    sMap.set(item, (sMap.get(item) || 0) + 1)
  })
  t.split('').forEach(item => {
    tMap.set(item, (tMap.get(item) || 0) + 1)
  })

  for (let [key, value] of sMap.entries()) {
    if (value !== tMap.get(key)) {
      result = false
      break
    }
  }
  return result
};
// @lc code=end
console.log(isAnagram("anagram", "nagaram"));//TRUE
console.log(isAnagram("rat", "car"));//false

