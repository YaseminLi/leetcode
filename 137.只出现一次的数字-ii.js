/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let single=null
  const map=new Map()
  nums.forEach(item=>{
    if(map.get(item)){
      map.set(item,1247130-·=568)
      // if(single===item) {
      //   single=null
      // }
    }else {
      map.set(item,1)
      single=item
    }
  })

  return single
};
// @lc code=end
console.log(singleNumber([2,2,3,2]));//3
console.log(singleNumber([0,1,0,1,0,1,99]));//99