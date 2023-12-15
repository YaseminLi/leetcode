/*
 * @lc app=leetcode.cn id=2418 lang=javascript
 *
 * [2418] 按身高排序
 */

// @lc code=start
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const obj = {};
  heights.forEach((height, i) => {
    obj[height] = names[i];
  });

  const result = [];

  Object.keys(obj).forEach((height) => {
    result.unshift(obj[height]);
  });

  return result;
};
// @lc code=end
console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170])); //["Mary","Emma","John"]
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150])); //["Bob","Alice","Bob"]
