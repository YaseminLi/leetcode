/*
* @lc app=leetcode.cn id=349 lang=javascript
*
* [349] 两个数组的交集
* 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
*/

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const nums1Set = new Set(nums1)
  const nums2Set = new Set(nums2)
  const ret = []

  nums2Set.forEach(item => {
    if (nums1Set.has(item)) {
      ret.push(item)
    }
  })
  return ret

};
// @lc code=end
console.log(intersection([1, 2, 2, 1], [2, 2]));//[2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));//[9,4] 4,5,9  4,4,8,9,9

