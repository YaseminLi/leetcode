/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  const map=new Map()
  nums.forEach(item=>{
    if(map.get(item)){
      map.delete(item)
    }else {
      map.set(item,1)
    }
  })

  return [...map.keys()]
};
// @lc code=end
console.log(singleNumber([1,2,1,3,2,5]));//[3,5]
console.log(singleNumber([-1,0]));//[-1,0]
console.log(singleNumber( [0,1]));//[1,0]
