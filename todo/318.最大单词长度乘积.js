/*
 * @lc app=leetcode.cn id=318 lang=javascript
给你一个字符串数组 words ，找出并返回 length(words[i]) * length(words[j]) 的最大值，并且这两个单词不含有公共字母。如果不存在这样的两个单词，返回 0 。
 *
 * [318] 最大单词长度乘积
 * 输入：words = ["abcw","baz","foo","bar","xtfn","abcdef"]
输出：16 
解释：这两个单词为 "abcw", "xtfn"。
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
// 双层遍历
var maxProduct = function (words) {
  // let curMax = 0

  // const isRepeat = (a, b) => {
  //   const noRepeatA = new Set(a)
  //   const noRepeatB = new Set(b)
  //   if(noRepeatA.size===26||noRepeatB.size===26){
  //     return true
  //   }

  //   const noRepeatTotal = new Set([...noRepeatA, ...noRepeatB])
  //   return noRepeatTotal.size < noRepeatA.size + noRepeatB.size
  // }
  // for (let i = 0; i < words.length; i += 1) {
  //   for (let j = i + 1; j < words.length; j += 1) {
  //     if(curMax<words[i].length*words[j].length){
  //       if (!isRepeat(words[i], words[j])) {
  //         curMax = Math.max(curMax, words[i].length * words[j].length)
  //       }
  //     }
  //   }
  // }
  // return curMax
  const length = words.length;
  const masks = new Array(length).fill(0);
  for (let i = 0; i < length; i++) {
      const word = words[i];
      const wordLength = word.length;
      for (let j = 0; j < wordLength; j++) {
          masks[i] |= 1 << (word[j].charCodeAt() - 'a'.charCodeAt());
          console.log( masks[i]);
      }
  }
  let maxProd = 0;
  for (let i = 0; i < length; i++) {
      for (let j = i + 1; j < length; j++) {
          if ((masks[i] & masks[j]) === 0) {
              maxProd = Math.max(maxProd, words[i].length * words[j].length);
          }
      }
  }
  return maxProd;
};
// @lc code=end
console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));//16
// console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]));//4
// console.log(maxProduct(["a", "aa", "aaa", "aaaa"]));//0
// console.log(maxProduct(["eae", "ea", "aaf", "bda", "fcf", "dc", "ac", "ce", "cefde", "dabae"]));//15

