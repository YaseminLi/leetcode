/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const temp = {};
  let ret = null;

  for (let index = 0; index < nums.length; index++) {
    const item = nums[index];
    if (temp[item] != null) {
      ret = [index, temp[item]];
      break;
    } else {
      temp[target - item] = index;
    }
  }

  return ret;
};
// @lc code=end

console.log(twoSum([2, 7, 11, 15], 9)); //[0, 1]
console.log(twoSum([3, 2, 4], 6)); //[1,2]
