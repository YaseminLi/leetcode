/*
 * @lc app=leetcode.cn id=658 lang=javascript
 *
 * [658] 找到 K 个最接近的元素
 * 给定一个 排序好 的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。

整数 a 比整数 b 更接近 x 需要满足：

|a - x| < |b - x| 或者
|a - x| == |b - x| 且 a < b
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let left = 0
  let right = arr.length - 1
  let ans = -1

  //1.找到一个小于等于target的index
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    if (arr[middle] === x) {
      ans = middle
      break
    } else if (arr[middle] < x) {
      left = middle + 1
      ans = middle
    } else {
      right = middle - 1
    }
  }

  // 2.left right 分别比较与index的差值，放入较小的值 ，移动下标
  let startIndex = ans
  let endIndex = ans + 1
  while (k-- > 0) {
    if (startIndex < 0) {
      endIndex += 1
    } else if (endIndex >= arr.length) {
      startIndex -= 1
    } else if (x - arr[startIndex] <= arr[endIndex] - x) {
      startIndex -= 1
    } else {
      endIndex += 1
    }
  }
  return arr.slice(startIndex + 1, endIndex)
};
// @lc code=end
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));//[1,2,3,4]
console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1));//[1,2,3,4]

