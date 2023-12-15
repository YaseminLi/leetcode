/**
 * 输入：
 * A: [1,2,3,2,1]
 * B: [3,2,1,4,7]
 * 输出：3
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

// 两个游标，先确定A的初始值，b从查找到a的位置作为游标开始，找此时的最大长度，完全遍历时，每更新A的游标，B就要从头到尾遍历一遍
var findLength = function (A, B) {
  const al = A.length
  const bl = B.length
  let len = 0
  for (let i = 0; i < al; i++) {
    let long = 0
    const index = B.indexOf(A[i])
    if (index < 0) {
      continue
    } else {
      for (let l = index; l < bl; l++) {
        if (A[i] !== B[l]) {
          continue
        }
        long++
        for (let j = i + 1, k = l + 1; i < al, k < bl; j++, k++) {
          if (A[j] === B[k]) {
            long++
          } else {
            break
          }
        }
        len = Math.max(len, long)
        long = 0
      }
    }
  }
  return len
} // 9208ms 38M

// 做上面方法的优化，当剩余未查找的数组长度小于此时找到的最大长度时提前跳出
var findLength = function (A, B) {
  const al = A.length
  const bl = B.length
  let len = 0
  for (let i = 0; i < al; i++) {
    if (al - i < len) {
      break
    } //提前跳出
    let long = 0
    const index = B.indexOf(A[i])
    if (index < 0) {
      continue
    } else {
      for (let l = index; l < bl; l++) {
        if (bl - l < len) {
          break
        } // 提前跳出
        if (A[i] !== B[l]) {
          continue
        }
        long++
        for (let j = i + 1, k = l + 1; i < al, k < bl; j++, k++) {
          if (A[j] === B[k]) {
            long++
          } else {
            break
          }
        }
        len = Math.max(len, long)
        long = 0
      }
    }
  }
  return len
} // 523ms 38M 速度提升一倍

// for循环逻辑有些乱 整理下
var findLength = function (A, B) {
  const al = A.length
  const bl = B.length
  let len = 0
  for (let i = 0; i < al; i++) {
    if (al - i < len) {
      break
    }
    for (let l = 0; l < bl; l++) {
      if (bl - l < len) {
        break
      }
      if (A[i] === B[l]) {
        let long = 0
        while (i + long < al && l + long < bl && A[i + long] === B[l + long]) {
          long++
        }
        if (long > len) {
          len = long
        }
      }
    }
  }
  return len
} // 244ms 38M 速度又提升一倍
// const a = [1, 2, 3, 2, 1]
// const b = [3, 2, 1, 4, 7]
// const a = [70, 39, 25, 40, 7]
// const b = [52, 20, 67, 5, 31]
const a = [0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
const b = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
// const a = [1, 0, 0, 0, 1, 0, 0, 1, 0, 0]
// const b = [0, 1, 1, 1, 0, 1, 1, 1, 0, 0]
console.log(findLength(a, b))
