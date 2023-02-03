/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  const sum = arr.reduce((newSum, a) => a + newSum, 0);
  if (sum % 3 !== 0) return false; // sum不能等分成3部分
  const partSum = sum / 3;

  let firstInd = 0;
  let secondInd = 0;
  let temp = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (temp === partSum) {
      if (!firstInd) {
        firstInd = i;
      } else {
        secondInd = i;
      }
      temp = 0;
    }
    temp += arr[i];
  }
  return firstInd + 1 <= secondInd;
};
// @lc code=end
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1])); //true
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1])); //false
console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4])); //true
