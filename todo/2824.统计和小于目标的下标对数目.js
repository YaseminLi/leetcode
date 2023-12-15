/*
 * @lc app=leetcode.cn id=2824 lang=javascript
 *
 * [2824] 统计和小于目标的下标对数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  let count = 0
  const maxList = []
  for (let i = 0; i < nums.length; i += 1) {
    const newCount = maxList.filter(item => nums[i] < item)?.length
    count += newCount
    maxList.push(target - nums[i])
  }
  return count
  // let count = 0
  // for (let i = 0; i < nums.length; i += 1) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] < target) {
  //       count++;
  //     }
  //   }

  // }
  // return count
};
// @lc code=end
console.log(countPairs([-1, 1, 2, 3, 1], 2));//2
console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], -2));//-2
console.log(countPairs([9, -5, -5, 5, -5, -4, -6, 6, -6], 3));

