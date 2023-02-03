/*
 * @lc app=leetcode.cn id=1813 lang=javascript
 *
 * [1813] 句子相似性 III
 */

// @lc code=start
/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
// leftStartIndex
// leftEndIndex
// rightStartIndex
// rightEndIndex

// leftStartIndex存在时，若有rightStartIndex，则rightEndIndex需要等于longArrlength-1；若没有rightStartIndex，则leftEndIndex需要等于longArrlength-1；
// var areSentencesSimilar = function (sentence1, sentence2) {
//     // console.log(sentence1,sentence2);
//   const shortStr = sentence1.length >= sentence2.length ? sentence2 : sentence1;
//   const longStr = sentence1.length < sentence2.length? sentence2 : sentence1;

//   const shortArr = shortStr.split(" ")?.reverse();
//   const longArr = longStr.split(" ")?.reverse();

//   let leftStartIndex = null;
//   let leftEndIndex = null;
//   let rightStartIndex = null;
//   let rightEndIndex = null;
//   //i shortIndex  j longIndex
//   for (let i = 0, j = 0; i < shortArr.length, j < longArr.length; ) {

//     if (shortArr[i] === longArr[j]) {
//       if (leftStartIndex == null) {
//         leftStartIndex = j;
//         leftEndIndex = j;
//       } else if (j === leftEndIndex + 1) {
//         leftEndIndex += 1;
//       } else if (rightStartIndex == null) {
//         rightStartIndex = j;
//         rightEndIndex = j;
//       } else {
//         rightEndIndex += 1;
//       }
//       i += 1;
//       j += 1;
//     } else {
//       if (rightEndIndex != null) {
//         break;
//       }
//       j += 1;
//     }
//   }
//   console.log(leftStartIndex,leftEndIndex,rightStartIndex,rightEndIndex,shortArr,longArr);
//   return leftStartIndex != null
//     ? rightStartIndex != null
//       ? leftStartIndex!==0?leftEndIndex+1===rightStartIndex:rightEndIndex === longArr.length - 1
//       : leftStartIndex === 0||leftEndIndex===longArr.length-1
//     : false;
// };
// 什么鬼


// 双指针从头尾遍历
var areSentencesSimilar = function (sentence1, sentence2) {
    const sent1Arr=sentence1.split(" ")
    const sent2Arr=sentence2.split(" ")

    let left=0
    let right=0

    while(left<sent1Arr.length&&left<sent2Arr.length&&sent1Arr[left]===sent2Arr[left]){
        left+=1
    }

    while(right<sent1Arr.length-left&&right<sent2Arr.length-left&&sent1Arr[sent1Arr.length-1-right]===sent2Arr[sent2Arr.length-1-right]){
        right+=1
    }
    // console.log(left,right);

    return left+right===(sent2Arr.length>sent1Arr.length?sent1Arr.length:sent2Arr.length)

}
// @lc code=end
// console.log(areSentencesSimilar("My name is Haley", "My Haley")); //true
// console.log(areSentencesSimilar("My name is Haley","My name Haley"));//true
// console.log(areSentencesSimilar("My name is  a Haley","My is Haley"));//false
// console.log(areSentencesSimilar("of","A lot of words"));//false
// console.log(areSentencesSimilar("Eating right now","Eating"));//true
// console.log(areSentencesSimilar("Eating right now","Eating right"));//true
// console.log(areSentencesSimilar("Luky","Lucccky"));//false
// console.log(areSentencesSimilar("Are You Okay","are you okay"));//false
// console.log(areSentencesSimilar("qbaVXO Msgr aEWD v ekcb","Msgr aEWD ekcb"));//false
// console.log(areSentencesSimilar("xD iP tqchblXgqvNVdi","FmtdCzv Gp YZf UYJ xD iP tqchblXgqvNVdi"));//true
// console.log(areSentencesSimilar("A","a A b A"));//true
// console.log(areSentencesSimilar("TjZ ScAi m xz PNWaKigqqY p IyJ B rok","TjZ ScAi m LlbJhCf gL u m R pZpiH mSk a og xz PNWaKigqqY p IyJ B rok"));//true
// console.log(areSentencesSimilar("Ogn WtWj HneS","Ogn WtWj HneS"));//true
