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
//遍历 记录最大数的index，以及数字两倍的最大数
var dominantIndex = function (nums) {
  if (nums.length === 1) return 0;

  let maxNumIndex = 0;
  let maxDoubleNum = nums[0] * 2;
  let secondDoubleNum = 0;

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] > nums[maxNumIndex]) {
      maxNumIndex = i;
    }
    if (nums[i] * 2 > maxDoubleNum) {
      secondDoubleNum = maxDoubleNum;
      maxDoubleNum = nums[i] * 2;
    } else if (nums[i] * 2 > secondDoubleNum) {
      secondDoubleNum = nums[i] * 2;
    }
  }
  //   console.log(maxNumIndex, maxDoubleNum, secondDoubleNum);
  if (nums[maxNumIndex] >= secondDoubleNum) return maxNumIndex;

  return -1;
};
// @lc code=end

console.log(dominantIndex([3, 6, 1, 0])); //1
console.log(dominantIndex([1, 2, 3, 4])); //-1
console.log(dominantIndex([1])); //0
console.log(dominantIndex([0, 0, 3, 2])); //-1
console.log(dominantIndex([2, 0, 0, 3])); //-1
