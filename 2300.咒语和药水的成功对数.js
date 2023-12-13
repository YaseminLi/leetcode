/*
 * @lc app=leetcode.cn id=2300 lang=javascript
 *
 * [2300] 咒语和药水的成功对数
 */

// @lc code=start
/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  const result=[]

  const sortPotions=potions.sort((a,b)=>a-b)
  // console.log("successfulPairs ～～～ sortPotions:", sortPotions)

  for(let i=0;i<spells.length;i+=1){
    let count=0
    for(let j=0;j<sortPotions.length;j+=1){
      if(spells[i]*potions[j]>=success){
        count+=sortPotions.length-j
        j=sortPotions.length
      }
    }
    result.push(count)
  }
  return result
};
// @lc code=end
console.log(successfulPairs([5,1,3],[1,2,3,4,5],7));//[4,0,3]
console.log(successfulPairs([3,1,2],[8,5,8],16));//[2,0,2]
