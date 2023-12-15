/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
// row[i][j]=row[i-1][j-1]+row[i-1][j1]
// j max=i-1
var generate = function (numRows) {
  const arr = [[1]];
  //i 第几行
  for (let i = 2; i <= numRows; i += 1) {
    arr[i - 1] = [];
    for (let j = 0; j < i; j += 1) {
      arr[i - 1][j] = (arr[i - 2][j - 1] || 0) + (arr[i - 2][j] || 0);
    }
  }

  return arr;
};
// @lc code=end
console.log(generate(5)); //[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]
