/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
  // 1.遍历
  const iLen = mat.length
  const jLen = mat[0].length
  for (let i = 0; i < iLen; i += 1) {
    for (let j = 0; j < jLen; j += 1) {
      const top = i === 0 ? -1 : mat[i - 1][j]
      const right = j === jLen - 1 ? -1 : mat[i][j + 1]
      const bottom = i === iLen - 1 ? -1 : mat[i + 1][j]
      const left = j === 0 ? -1 : mat[j - 1][i]
      const cur = mat[i][j]
      if (cur > top && cur > right && cur > bottom && cur > left) {
        return [i, j]
      }
    }
  }
};
console.log(findPeakGrid([[1, 4], [3, 2]]));//[0,1]
console.log(findPeakGrid([[10, 20, 15], [21, 30, 14], [7, 16, 32]]));//[1,1]
console.log(findPeakGrid([[1, 2, 3, 4, 5, 6, 7, 8], [2, 3, 4, 5, 6, 7, 8, 9], [3, 4, 5, 6, 7, 8, 9, 10], [4, 5, 6, 7, 8, 9, 10, 11]]));//[3，7]