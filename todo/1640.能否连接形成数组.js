/*
 * @lc app=leetcode.cn id=1640 lang=javascript
 *
 * [1640] 能否连接形成数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */

// 遍历pieces，若在arr中可以查找到，arr中索引处置为0
// 遍历peices时，若peices[i]还未结束，而arr[j]为0或者不存在，则为false
var canFormArray = function (arr, pieces) {
  if (pieces.length === 1 && pieces[0][0] !== arr[0]) {
    return false;
  }
  for (let i = 0; i < pieces.length; i += 1) {
    // 外层pieces遍历
    let arrBeginIndex = -1;

    for (let j = 0; j < pieces[i].length; j += 1) {
      const cur = pieces[i][j];
      if (j === 0) {
        arrBeginIndex = arr.findIndex((el) => el === cur);
        if (arrBeginIndex < 0) {
          return false;
        }
      } else {
        arrBeginIndex += 1;
        if (arrBeginIndex < arr.length && arr[arrBeginIndex] === cur) {
          arr[arrBeginIndex] = 0;
        } else {
          return false;
        }
      }
    }
  }
  return true;
};
// @lc code=end

console.log(canFormArray([15, 88], [[88], [15]]));
console.log(canFormArray([49, 18, 16], [[16, 18, 49]]));
console.log(canFormArray([91, 4, 64, 78], [[78], [4, 64]]));
console.log(canFormArray([37, 69, 3, 74, 46], [[37, 69, 3, 74, 46]]));
