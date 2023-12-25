/**
 * 输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
输入: intervals = [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// //排序：interval中每项的第一个元素是递增的，遍历数组，每两个元素进行合并。第二个元素的首项小于等于第一个元素的尾项时可合并，合并后的数组各取两个元素中首项和尾项的较大值
// var merge = function (intervals) {
//   if (intervals.length < 2) return intervals
//   intervals.sort((a, b) => a[0] - b[0]);

//   const result = [] //merge后的元素放入
//   let prev = intervals[0] //待合并项
//   for (let i = 1; i < intervals.length; i += 1) {
//     let curr = intervals[i]
//     if (prev[1] >= curr[0]) {
//       prev[1] = Math.max(prev[1], curr[1])
//     } else {
//       result.push(prev)
//       prev = curr
//     }
//   }
//   result.push(prev)
//   return result
// };
// 排序：interval中每项的第一个元素是递增的，遍历数组，每两个元素进行合并。第二个元素的首项小于等于第一个元素的尾项时可合并，合并后的数组各取两个元素中首项和尾项的较大值
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  let i = 0
  while (i < intervals.length - 1) {
    const cur = intervals[i]
    const next = intervals[i + 1]
    if (next[0] <= cur[1]) {
      // 可以合并
      cur[1] = Math.max(cur[1], next[1])
      intervals.splice(i + 1, 1)
    } else {
      i += 1
    }
  };
  return intervals
}
console.log(merge([[1, 4], [4, 5]]));
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.log(merge([]));
console.log(merge([[1, 4], [0, 0]]));
console.log(merge([[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]]));