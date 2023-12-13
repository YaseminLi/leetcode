/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 * DNA序列 由一系列核苷酸组成，缩写为 'A', 'C', 'G' 和 'T'.。

例如，"ACGAATTCCG" 是一个 DNA序列 。
在研究 DNA 时，识别 DNA 中的重复序列非常有用。

给定一个表示 DNA序列 的字符串 s ，返回所有在 DNA 分子中出现不止一次的 长度为 10 的序列(子字符串)。你可以按 任意顺序 返回答案。
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  if(s.length<10) return []
  const list=new Set()
  const map=new Map()
  for(let i=0;i<s.length-10+1;i+=1){
    const subString=s.slice(i,i+10)
    if(map.get(subString)){
      list.add(subString)
    }else{
      map.set(subString,1)
    }
  }
  return [...list]
};
// @lc code=end
console.log(findRepeatedDnaSequences( "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));//["AAAAACCCCC","CCCCCAAAAA"]
console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA"));//["AAAAAAAAAA"]
