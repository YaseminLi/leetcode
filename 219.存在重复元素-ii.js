/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 * 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  //map key 元素，value 索引，更新为较大的
  const map = new Map()
  for (let i = 0; i < nums.length; i += 1) {
    const cur = nums[i]
    const idx = map.get(cur)
    if (idx != null && i - idx <= k) {
      return true
    }
    map.set(cur, i)
  }
  return false
};
// @lc code=end
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));//true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));//false
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));//true

