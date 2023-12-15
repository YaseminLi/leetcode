/*
 * @lc app=leetcode.cn id=2511 lang=javascript
 *
 * [2511] 最多可以摧毁的敌人城堡数目
 */

// @lc code=start
/**
 * @param {number[]} forts
 * @return {number}
 */
// 两种之间最小值
var captureForts = function (forts) {
  let max = 0;

  let isStart = 0; // 是否已开始计算
  let curMax = 0;
  for (let i = 0; i < forts.length; i += 1) {
    let cur = forts[i];
    if (cur === 0) {
      // cur为0
      if (isStart) {
        curMax += 1;
      }
    } else if (isStart) {
      // cur为1or-1,尾巴
      if(cur===isStart){
        curMax=0
      }else{
        max=Math.max(max,curMax)
        curMax=0
        isStart=cur
      }
    } else {
        // cur为1or-1,头
      isStart = cur;
    }
  }

  return max
};
console.log(captureForts([1, 0, 0, -1, 0, 0, 0, 0, 1])); //4
console.log(captureForts([0, 0, 1, -1])); //0
// @lc code=end
