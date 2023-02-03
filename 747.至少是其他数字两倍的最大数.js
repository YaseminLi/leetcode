/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  if (nums.length === 1) return 0;
  const max = Math.max(nums);
};
// @lc code=end
console.log(dominantIndex([3, 6, 1, 0])); //1
console.log(dominantIndex([1, 2, 3, 4])); //-1
console.log(dominantIndex([1])); //0
