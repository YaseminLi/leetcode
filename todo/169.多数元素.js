/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map()
  const temp = nums.length / 2
  for (let i = 0; i < nums.length; i += 1) {
    const count = map.get(nums[i])
    map.set(nums[i], count ? count + 1 : 1)
  }
  // console.log(map, temp);

  const result = []

  for (let [key, value] of map.entries()) {
    // console.log("majorityElement ～～～ value:", value)
    if (value > temp) {
      result.push(key)
    }
  }
  return result
};
// @lc code=end
console.log(majorityElement([3, 2, 3]));//3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));//2

