/*
 * @lc app=leetcode.cn id=1105 lang=javascript
 *
 * [1105] 填充书架
 */

// @lc code=start
/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function (books, shelfWidth) {
  const n = books.length;
  const dp = new Array(n + 1).fill(1000000);
  dp[0] = 0;
  for (let i = 0; i < n; i++) {
    let maxHeight = 0,
      curWidth = 0;
    for (let j = i; j >= 0; j--) {
      curWidth += books[j][0];
      if (curWidth > shelfWidth) {
        break;
      }
      maxHeight = Math.max(maxHeight, books[j][1]);
      dp[i + 1] = Math.min(dp[i + 1], dp[j] + maxHeight);
    }
  }
  return dp[n];
};
// @lc code=end
console.log(
  minHeightShelves(
    [
      [1, 1],
      [2, 3],
      [2, 3],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 2],
    ],
    4
  )
); //6
console.log(
  minHeightShelves(
    [
      [1, 3],
      [2, 4],
      [3, 2],
    ],
    6
  )
); //4
