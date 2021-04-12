/**
 * 输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4 下标
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 //二分法，总有一端是有序的
 // 根据有序一端的收尾值，判断目标值是否在区间内
var search = function(nums, target) {
  let left=0,right=nums.length-1
  const center=Math.floor((left+right)/2)
  if(nums[left]<nums[center])

};