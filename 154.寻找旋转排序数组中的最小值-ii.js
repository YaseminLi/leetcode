/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 * 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,4,4,5,6,7] 在变化后可能得到：
若旋转 4 次，则可以得到 [4,5,6,7,0,1,4]
若旋转 7 次，则可以得到 [0,1,4,4,5,6,7]
注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

给你一个可能存在 重复 元素值的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。

你必须尽可能减少整个过程的操作步骤。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left = 0
  let right = nums.length - 1
  while (left < right) {
    const middle = Math.floor((left + right) / 2)
    if (nums[middle]>nums[right]) {
      left = middle + 1
    } else if(nums[middle]<nums[right]){
      right = middle
    }else {
      // 相等时，不能确定在哪半边，缩小范围
      right-=1
    }
  }
  return nums[left]
};
// @lc code=end
console.log(findMin([1, 3, 5]));//1
console.log(findMin([2, 2, 2, 0, 1]));//0
console.log(findMin([3,3,1,3]));//1
console.log(findMin([1,3,3,3,3,3,3]));//1
console.log(findMin([3,5,1]));//1
console.log(findMin([10,1,10,10,10]));//1

