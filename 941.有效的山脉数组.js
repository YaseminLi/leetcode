/**
 * 给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。
A.length >= 3
在 0 < i < A.length - 1 条件下，存在 i 使得：
A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[A.length - 1]

 * @param {number[]} A
 * @return {boolean}
 */
//遍历数组，当数字变小后，就不能再增大，变小\变大必须出现且先大后小
var validMountainArray = function (A) {
  if (A.length < 3) return false
  let haveUp = false
  let beginDown = false //是否开始下降
  for (let i = 1; i < A.length; i++) {
    if (A[i - 1] > A[i]) {
      if (!haveUp) return false
      beginDown = true
      continue
    }
    if (A[i - 1] === A[i]) {
      return false
    }
    if (A[i - 1] < A[i]) {
      haveUp = true
      if (beginDown) {
        return false
      }
    }
  }
  return haveUp && beginDown
};

//优化：遍历找到第一个开始下降的A[i],A[i]后必须小于它且i大于0
var validMountainArray = function (A) {
  if (A.length < 3) return false
  let top=null //最高峰值
  for (let i = 1; i < A.length; i++) {
    if(top&&!(A[i-1]>A[i])){
      return false
    }
    if(A[i-1]>A[i]){
      top=top==null?i-1:top
    }
  }
  return !!top
}


console.log(validMountainArray([1, 2, 3, 2, 1]));
console.log(validMountainArray([2, 1]));
console.log(validMountainArray([4, 3, 2, 1]));
console.log(validMountainArray([2, 0, 2]));
console.log(validMountainArray([0, 1, 2, 1, 2]));
console.log(validMountainArray([2, 1, 2, 3, 5, 7, 9, 10, 12, 14, 15, 16, 18, 14, 13]));