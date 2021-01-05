/**
 * 给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 
原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
链接：https://leetcode-cn.com/problems/rotate-image
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

 // 不使用额外空间，第i行的第j个元素，在旋转后变成了倒数第i列的第j个元素，即matrix[row][col]---> matrix[col][n-row-1]
 // 怎么确定遍历的条件？
 // martix[col][n-row-1]  matrix-new[row][col],旋转后会被覆盖。
 // 添加一个中间变量  temp=matrix[col][n−row−1] matrix[col][n−row−1]=matrix[row][col]
 // 得到 row=col  col=n-row-1
// 后面的等式转换 看不懂……
var rotate = function(matrix) {

};