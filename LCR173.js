// https://leetcode.cn/problems/que-shi-de-shu-zi-lcof/solution/
/**
 * @param {number[]} records
 * @return {number}
 */
var takeAttendance = function (records) {
  // 1.查找第一个value和索引不一样的，返回索引
  // for (let i = 0; i < records.length; i += 1) {
  //   if (records[i] !== i) {
  //     return i
  //   }
  // }
  // return records.length

  // 2.二分法
  let left = 0
  let right = records.length - 1
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    if (records[middle] !== middle) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
  return left
};
console.log(takeAttendance([0, 1, 2, 3, 5]));//4
console.log(takeAttendance([0, 1, 2, 3, 4, 5, 6, 8]));//7
console.log(takeAttendance([0]));//1
console.log(takeAttendance([0, 1]));//2