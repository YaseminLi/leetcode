/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  const obj = {};
  for (let i = 0; i < nums.length; i += 1) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      delete obj[nums[i]];
    }
  }
  return Object.keys(obj)[0];
};

// @lc code=end

console.log(singleNumber([2, 2, 1])); //1
console.log(singleNumber([4, 1, 2, 1, 2])); //4
console.log(singleNumber([1])); //1
