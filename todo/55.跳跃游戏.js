/**
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
数组中的每个元素代表你在该位置可以跳跃的最大长度。
判断你是否能够到达最后一个下标。

示例 1：
输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。

链接：https://leetcode-cn.com/problems/jump-game
 * @param {number[]} nums
 * @return {boolean}
 */

// 动态规划
//  var canJump = function(nums) {
//    const len=nums.length
//    if(len===1||nums[0]>=len-1) return true

//     const dp=new Array(len)
//     dp[0]=true

//     for(let i=0;i<len;i+=1){
//       if(!dp[i])return false
//       if(dp[len-1]) return true

//       const maxStep=nums[i]

//       for(let j=1;j<=maxStep;j+=1){
//         dp[i+j]=true
//       }
//     }

//     return !!dp[len-1]
// };


// 贪心算法
// 维护一个变量reach,表示最远能够达到的位置，初始化为0，遍历数组中的每一个数字，如果当前坐标大于reach或者reach已经抵达最最后一个位置则跳出循环，佛否则就更新react的值为其和i+nums[i]中较大的值,其中i+nums[i]表示当前位置能够到达的最大位置。
var canJump = function(nums) {
  let reach=0// 能到达的最远位置
  for(let i=0;i<nums.length;i+=1){
    if(reach>nums.length-1||i>reach) break
    reach=Math.max(i+nums[i],reach)
  }

  return reach>=nums.length-1
};
console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
console.log(canJump([3]));
console.log(canJump([3,1,2,7,2]));