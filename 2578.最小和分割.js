/*
 * @lc app=leetcode.cn id=2578 lang=javascript
 *
 * [2578] 最小和分割
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */

// 数字排序
// 从小到大依次放入两个数组
// 数组组合成两个数字，求和
var splitNum = function (num) {
  // const numList = (num + '').split('').sort((a, b) => a - b)
  // const minList = []
  // const maxList = []
  // numList.forEach((item, i) => {
  //   if (i % 2 === 0) {
  //     minList.push(item)
  //   } else {
  //     maxList.push(item)
  //   }
  // })

  // const min=minList.join('')-0
  // const max=maxList.join('')-0
  // console.log('numList', min,max,min+max);
  // return min+max

  const numList = (num + '').split('').sort((a, b) => a - b)
  let min= 0
  let max= 0
  numList.forEach((item, i) => {
    if (i % 2 === 0) {
      min=min*10+Number(item)
    } else {
      max=max*10+Number(item)
    }
  })
  return min+max
};
// @lc code=end

console.log(splitNum(4325));//59 25 34
console.log(splitNum(687));//75 68 7

