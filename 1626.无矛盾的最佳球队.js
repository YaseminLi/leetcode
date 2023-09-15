/*
 * @lc app=leetcode.cn id=1626 lang=javascript
 *
 * [1626] 无矛盾的最佳球队
 */

// @lc code=start
/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function (scores, ages) {
  let maxScore = 0;

  let obj = {};
  ages.forEach((age, index) => {
    const score = scores[index];
    if (obj[age]) {
      obj[age].push(score);
    } else {
      obj[age] = [score];
    }
  });
  console.log("obj", obj);

  Object.keys(obj).forEach((age) => {});
};
// @lc code=end
console.log(bestTeamScore([1, 3, 5, 10, 15], [1, 2, 3, 4, 5])); //34
console.log(bestTeamScore([4, 5, 6, 5], [2, 1, 2, 1])); //16
console.log(bestTeamScore([1, 2, 3, 5], [8, 9, 10, 1])); //6
