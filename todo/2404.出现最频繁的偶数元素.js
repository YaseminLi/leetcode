/*
 * @lc app=leetcode.cn id=2404 lang=javascript
 *
 * [2404] 出现最频繁的偶数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 找出所有偶数元素及其次数
// 所有偶数元素次数最多的一个
var mostFrequentEven = function (nums) {
  const obj = {};
  nums.forEach((per) => {
    if (per % 2 === 0) {
      if (obj[per]) {
        obj[per] = obj[per] + 1;
      } else {
        obj[per] = 1;
      }
    }
  });

  let target = -1;
  for (let item in obj) {
    if (target === -1 || obj[item] > obj[target]) {
      target = item;
    } else if (obj[item] > obj[target]) {
      target = Math.min(target, item);
    }
  }
  return target;
};
// @lc code=end
console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 1])); //2
console.log(mostFrequentEven([4, 4, 4, 9, 2, 4])); //4
console.log(mostFrequentEven([29, 47, 21, 41, 13, 37, 25, 7])); //-1
