/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
每行中的整数从左到右按升序排列。每行的第一个整数大于前一行的最后一个整数。
输入:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3 输出: true

链接：https://leetcode-cn.com/problems/search-a-2d-matrix

 */
//找出target所处的子数组
var searchMatrix = function (matrix, target) {
    //矩阵中数组的数量
    let n = matrix.length
    //在matrix[l……r]范围内查找目标数组
    let l = 0
    let r = n - 1
    //存储目标元素所在的数组
    let targetArr = null
    //矩阵中每个数组的长度
    let m = matrix[0].length
    //处理边界
    if(n===0){
        return false
    }
    if (target < matrix[0][0] || target > matrix[n - 1][m - 1]) {
        return false
    }
    //查找目标元素所在数组
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        let midArr = matrix[mid]
        if (target < midArr[0]) {
            if (target > matrix[mid - 1][m - 1]) {
                return false
            }
            r = mid - 1
        }
        if (target > midArr[m - 1]) {
            if (target < matrix[mid + 1][0]) {
                return false
            }
            l = mid + 1
        }
        if (target >= midArr[0] && target <= midArr[m - 1]) {
            targetArr = midArr
            break
        }
    }
    //没有找到目标元素所在数组
    if (!targetArr) {
        return false
    }
    //在目标数组[ll……rr]中查找
    let ll = 0
    let rr = m - 1
    while (ll <= rr) {
        let mid = Math.floor((ll + rr) / 2)
        if (target < targetArr[mid]) {
            rr = mid - 1
        }
        if (target > targetArr[mid]) {
            ll = mid + 1
        }
        if (target === targetArr[mid]) {
            return true
        }
    }
    return false
};
let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
]
let target = 50
console.log(searchMatrix(matrix, target));
