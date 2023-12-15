/*
 * @lc app=leetcode.cn id=2240 lang=javascript
 *
 * [2240] 买钢笔和铅笔的方案数
 */

// @lc code=start
/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function (total, cost1, cost2) {
  let count = 0;
  const maxPenCount = Math.floor(total / cost1);
  for (let i = 0; i <= maxPenCount; i += 1) {
    const penCount = i;
    const pencilRemian = total - penCount * cost1;
    const planCount = Math.floor(pencilRemian / cost2) + 1;
    count += planCount;
  }
  return count;
};
console.log(waysToBuyPensPencils(20, 10, 5)); //9
console.log(waysToBuyPensPencils(5, 10, 10)); //1
// @lc code=end
