/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * @param {string} digits
 * @return {string[]}
 */


var letterCombinations = function (digits) {
  const len = digits.length
  if (len === 0) return []
  const letters = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  let result = [''] //存储结果
  for (let i = 0; i < len; i++) {
    const resultLen = result.length
    for (let j = 0; j < resultLen; j++) {
      const cur = result.shift()
      const curStr=letters[digits[i]]
      for (const l of curStr) {
        result.push(cur + l)
      }
    }
  }
  return result
};

//我：暴力解法：从后往前遍历输入的字符串
var letterCombinations = function(digits) {
  const len=digits.length
   if(len===0)return []
   const letters={
     2:'abc',
     3:'def',
     4:'ghi',
     5:'jkl',
     6:'mno',
     7:'pqrs',
     8:'tuv',
     9:'wxyz'
   }
   let result=[] //存储最后结果
   const lastLetter=digits[0]
   result=letters[lastLetter].split('')
   for(let i=1;i<len;i++){
     const curLetter=digits[i] // 当前数字
     const curStr=letters[curLetter] //当前数字对应的字母
     const container=[]
     for(let j=0;j<curStr.length;j++){
         for(let m=0;m<result.length;m++){
           container.push(curStr[j].concat(result[m]))
         }
     }
     result=container
   }
   return result
 };
const digits = '23'
console.log(letterCombinations(digits));
console.log(letterCombinations(''));