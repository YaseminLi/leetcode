/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 元素按照index填充
var longestConsecutive = function (nums) {
  if(nums.length===0) return 0
  const arrSet = new Set(nums)
  
  const largeObj={}
  const  smallObj={}
  for (let item of arrSet.values()) {
    if(item<0){
      smallObj[0-item]=item
    }else{
      largeObj[item]=item
    }
  }

  const largeArr=Object.keys(largeObj)
  const smallArr=[]
  Object.keys(smallObj).forEach(item=>{
    smallArr.unshift(0-item)
  })
  const totalArr=smallArr.concat(largeArr)
  console.log("longestConsecutive ～～～ totalArr:", totalArr)

  let maxLen=1
  let curLen=1
  for(let i=1;i<totalArr.length;i+=1){
    if(totalArr[i]-totalArr[i-1]===1){
      //连续
      curLen+=1
      maxLen=Math.max(maxLen,curLen)
    }else{
      curLen=1
    }
  }
  return maxLen
};
// @lc code=end
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));//4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));//9
console.log(longestConsecutive([0, -1]));//2
console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6]));//7

