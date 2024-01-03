/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 链接：https://leetcode-cn.com/problems/move-zeroes

请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 1. 冒泡，0放到末尾 O(n2)
// var moveZeroes = function(nums) {
//   let count=0 //已经放好的数量
//   while(count<=nums.length){
//     let i=0;
//     let j=i+1
//     while(j<nums.length-count){
//       if(nums[i]===0&&nums[j]!==0){
//         //交换
//         nums[i]=nums[j]
//         nums[j]=0
//       }
//       i+=1
//       j+=1
//     }
//     count+=1
//   }
//   // return nums
// };

// 2. 双指针 O(n)
var moveZeroes = function(nums) {
  let i=0;//遍历到的元素下标
  let j=0;//最后一个非0元素的下标

  while(i<nums.length){
      if(nums[i]!==0){
          nums[j]=nums[i]
          i++
          j++
      }else{
          i++
      }
  }

  while(j<nums.length){
      nums[j]=0
      j++
  }
};
// @lc code=end
console.log(moveZeroes([0,1,0,3,12]));//[1,3,12,0,0]
console.log(moveZeroes([0]));//[0]

