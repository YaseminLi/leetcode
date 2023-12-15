/*
 * @lc app=leetcode.cn id=2379 lang=javascript
 *
 * [2379] 得到 K 个黑块的最少涂色次数
 */

// @lc code=start
/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */

// 滑动窗口
// 1. 计算前K个的操作数，记录count
// 2. 滑动窗口，更新count,取min
var minimumRecolors = function (blocks, k) {
  let minAction = 0;
  let curAction = 0;
  for (let i = 0; i < blocks.length; i += 1) {
    if (blocks[i] === "W") {
      curAction += 1;

      if (i < k) {
        minAction += 1;
      }
    }

    if (i >= k && blocks[i - k] === "W") {
      curAction = curAction - 1;
    }
    // console.log(i-k+1,i,curAction,minAction);
    minAction = Math.min(curAction, minAction);
  }
  return minAction;
};
// @lc code=end
console.log(minimumRecolors("WBBWWBBWBW", 7)); //3
console.log(minimumRecolors("WBWBBBW", 2)); //0
