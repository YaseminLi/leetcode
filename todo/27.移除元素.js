/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 双指针
// 指针一 和val不同的最后一个元素的下标 从-1开始
// 指针二 未遍历的元素下标 从0 开始
// 指针二 和val不同，指针一后移， 指针一二交换位置，指针二后移
// 指针二和val相同，指针二后移
var removeElement = function (nums, val) {
  let xIndex = -1;
  for (let yIndex = 0; yIndex < nums.length; yIndex += 1) {
    if (nums[yIndex] !== val) {
      xIndex += 1;
      const temp = nums[yIndex];
      nums[yIndex] = nums[xIndex];
      nums[xIndex] = temp;
    }
  }
  return xIndex + 1;
};
// @lc code=end

console.log(removeElement([3, 2, 2, 3], 3)); //2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); //5
