/**
 * 给定一个字符串和一个字符串字典，找到字典里面最长的字符串，该字符串可以通过删除给定字符串的某些字符来得到。如果答案不止一个，返回长度最长且字典顺序最小的字符串。如果答案不存在，则返回空字符串。

示例 1:

输入:
s = "abpcplea", d = ["ale","apple","monkey","plea"]
输出: 
"apple"
示例 2:

输入:
s = "abpcplea", d = ["a","b","c"]
输出: 
"a"
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */

//遍历数组，将每个元素与给定字符进行匹配
// 匹配时一个字符串一个指针
// 每匹配过数组中一项后，取得最长字符串
// 未匹配时，最长字符串长度大于当前字符串时，可跳过


// 判断字典顺序，a是否在b前面
// const getCharCodeAtOrder = (a, b) => {
//   for (let i = 0, j = 0; i < a.length || j < b.length; i += 1, j += 1) {
//     if (!a[i]) return true
//     if (!b[j]) return false
//     if (a[i].charCodeAt() >b[j].charCodeAt()) {
//       return false
//     }else if(a[i].charCodeAt() <b[j].charCodeAt()){
//       return true
//     }
//   }
//   return true
// }
var findLongestWord = function (s, dictionary) {
  // 先按照字典顺序排列
  dictionary.sort()
  let sLen = s.length
  let longestWord = ''
  for (let i = 0; i < dictionary.length; i += 1) {
    const curStr = dictionary[i]
    // 优化：不比longestWord长度大，就不匹配了
    if (curStr.length <=longestWord.length) continue
    let j = 0, k = 0
    // 优化：未遍历的当前字符串大于未遍历的给定字符串，结束循环
    while (j < curStr.length && k < sLen&&(curStr.length-1-j)<=(sLen-1-k)) {
      if (curStr[j] === s[k]) {
        j += 1
        k += 1
      } else {
        k += 1
      }
    }
    if (j === curStr.length) {
        longestWord = longestWord.length < curStr.length ? curStr : longestWord
    }
  }
  return longestWord
};

console.log(findLongestWord("abpcplea",["ale","apple","monkey","plea"]));
console.log(findLongestWord("abce",["abe","abc"]));
console.log(findLongestWord("wordgoodgoodgoodbestword",["word","good","best","good"]));