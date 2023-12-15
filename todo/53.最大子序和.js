/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 * @param {number[]} nums
 * @return {number}
 */
//动态规划
var maxSubArray = function (nums) {
  let ans =nums[0]
  let sum =0
  for (const n of nums) {
    if (sum >0) {
        //对结果有增加效果
        sum += n
  
    } else {
        // sum 小于0时，对结果没有增加效果
        sum = n
    }
    ans = Math.max(ans, sum)
  }
  return ans
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([-2]));
console.log(maxSubArray([2]));
console.log(maxSubArray([0]));