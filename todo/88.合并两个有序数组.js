/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let mIndex = 0;
  let nIndex = 0;
  while (nIndex < n && mIndex < m) {
    if (nums1[mIndex] <= nums2[nIndex]) {
      mIndex += 1;
    } else if (nums1[mIndex] > nums2[nIndex]) {
      const temp = nums2[nIndex];
      nums2[nIndex] = nums1[mIndex];
      nums1[mIndex] = temp;
      mIndex += 1;
    }
  }
  while (nIndex < n) {
    nums1[mIndex] = nums2[nIndex];
    nIndex += 1;
    mIndex += 1;
  }
  return nums1;
};
// @lc code=end

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); //[1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); //[1]
console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3)); //[1,2,3,4,5,6]
