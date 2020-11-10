/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
链接：https://leetcode-cn.com/problems/move-zeroes
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 // 双指针、数组
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