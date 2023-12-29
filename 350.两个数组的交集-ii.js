/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 * 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const nums1Map = new Map()
  nums1.forEach(item => {
    nums1Map.set(item, (nums1Map.get(item) || 0) + 1)
  })
  const ret = []
  nums2.forEach(item => {
    const temp = nums1Map.get(item)
    if (temp) {
      ret.push(item)
      nums1Map.set(item, temp - 1)
    }
  })
  return ret
};
// @lc code=end
console.log(intersect([1, 2, 2, 1], [2, 2]));//[2,2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));//[9,4] 

