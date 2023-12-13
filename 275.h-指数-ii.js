/*
 * @lc app=leetcode.cn id=275 lang=javascript
 *
 * [275] H 指数 II
 * 给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数，citations 已经按照 升序排列 。计算并返回该研究者的 h 指数。

h 指数的定义：h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （n 篇论文中）总共有 h 篇论文分别被引用了至少 h 次。

 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
// 升序排列,倒查，找一项已经遍历的数和当前的citations【i】相同
var hIndex = function (citations) {
  let h = 0
  for (let i = citations.length - 1; i >= 0; i -= 1) {
    if(citations[i]>=h+1){
      h+=1
    }else{
      break
    }
  }
  return h

};
// @lc code=end
console.log(hIndex([0, 1, 3, 5, 6]));//3
console.log(hIndex([1, 2, 100]));//2
console.log(hIndex([100]));//1
console.log(hIndex([1, 2]));//1

