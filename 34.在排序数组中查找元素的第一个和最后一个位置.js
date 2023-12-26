/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 二分法查找，左边界，右边界
// var searchRange = function (nums, target) {
//   let low = 0, high = nums.length - 1
//   if (nums.length == 1) {
//     if (nums[0] == target) return [0, 0]
//   }
//   let res = [-1, -1]
//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2)
//     const c = nums[mid]
//     if (target > c) {
//       low = mid + 1
//     } else if (target < c) {
//       high = mid - 1
//     } else {
//       let l = mid, r = mid;
//       res = [mid, mid]
//       while (l >= 0) {
//         if (nums[--l] == target) {
//           res[0] = l
//         } else {
//           break
//         }
//       }
//       while (r < nums.length) {
//         if (nums[++r] == target) {
//           res[1] = r
//         } else {
//           break
//         }
//       }
//       break
//     }
//   }
//   return res
// };
// const binarySearch = (nums, target, lower) => {
//   let left = 0, right = nums.length - 1, ans = nums.length;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (nums[mid] > target || (lower && nums[mid] >= target)) {
//       right = mid - 1;
//       ans = mid;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return ans;
// }

// var searchRange = function (nums, target) {
//   let ans = [-1, -1];
//   const leftIdx = binarySearch(nums, target, true);
//   const rightIdx = binarySearch(nums, target, false) - 1;
//   if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
//     ans = [leftIdx, rightIdx];
//   }
//   return ans;
// };

// 二分查找：
//lower 比target大还是小
// 查找第一个等于target的元素
var searchRange = function (nums, target) {
  var binarySearch = function (nums, target, lower) {
    let left = 0
    let right = nums.length - 1
    let ans = nums.length
    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      if (nums[middle] > target || (lower && nums[middle] >= target)) {
        right = middle - 1
        ans = middle
      } else {
        left = middle + 1
      }
    }
    return ans

  }

  const res = [-1, -1]
  if (nums.length === 1 && nums[0] === target) {
    return [0, 0]
  }
  // 查找左边第一个等于target的元素
  const leftIdx = binarySearch(nums, target, true)
  console.log("searchRange ～～～ leftIdx:", leftIdx)
  //查找右边最后一个等于target的元素
  const rightIdx = binarySearch(nums, target, false) - 1
  console.log("searchRange ～～～ rightIdx:", rightIdx)
  if (0 <= leftIdx && leftIdx <= rightIdx && rightIdx < nums.length) {
    res[0] = leftIdx
    res[1] = rightIdx
  }
  return res
};
// @lc code=end
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));//[3,4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));//[-1,-1]
console.log(searchRange([], 0));//[-1,-1]

