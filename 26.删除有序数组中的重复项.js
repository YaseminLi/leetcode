/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 两个指针
// 指针一：当前无重复项的最后一个元素的下标 从0开始
// 指针二：未对比的元素下标 从1开始
// 若相同，指针二后移；
// 若不同，指针一后移，再和指针二交换元素，指针二后移
var removeDuplicates = function (nums) {
  let xIndex = 0;
  for (let yIndex = 1; yIndex < nums.length; yIndex += 1) {
    if (nums[yIndex] !== nums[xIndex]) {
      xIndex += 1;
      if (xIndex !== yIndex) {
        // 交换
        const temp = nums[yIndex];
        nums[yIndex] = nums[xIndex];
        nums[xIndex] = temp;
      }
    }
  }
  return xIndex + 1;
};
// @lc code=end

console.log(removeDuplicates([1, 1, 2])); //2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); //5
