/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组 https://leetcode-cn.com/problems/sort-an-array
 * 给你一个整数数组 nums，请你将该数组升序排列。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 1.快速排序 超时。
// 确定一个基准数，比基准数小的放在一边，比基准数大的放在另一边，递归处理分区

// 交换两个元素
const swap = (arr, m, n) => {
  const temp = arr[m]
  arr[m] = arr[n]
  arr[n] = temp
}


const partition = (arr, start, end) => {
  const pivot = start
  let divider = start + 1 //其左边的值比base小
  for (let i = divider; i <= end; i += 1) {
    if (arr[i] <= arr[pivot]) {
      swap(arr, i, divider)
      divider += 1
    }
  }
  swap(arr, pivot, divider - 1)
  return divider - 1
}

const quickSort = (arr, start, end) => {
  if (start >= end) return
  partitionIndex = partition(arr, start, end)
  quickSort(arr, start, partitionIndex - 1)
  quickSort(arr, partitionIndex + 1, end)
}
var sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1)
  return nums
};

// 2.插入排序 超时……
// var sortArray = function (nums) {
//   let i = 1; // 当前需要排序的数
//   while (i < nums.length) {
//     // 往前遍历，找插入位置
//     let j = i - 1
//     const cur = nums[i]
//     while (cur < nums[j] && j >= 0) {
//       nums[j + 1] = nums[j]
//       j -= 1
//     }
//     nums[j + 1] = cur
//     i += 1
//   }
//   return nums
// };
// @lc code=end

console.log(sortArray([5, 1, 1, 2, 0, 0]));//[0,0,1,1,2,5] [1,5,1,2,0,0]
console.log(sortArray([5, 2, 3, 1]));//[1,2,3,5]
console.log(sortArray([1]));