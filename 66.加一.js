/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let needAddOne = true;
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    if (needAddOne) {
      const sum = digits[i] + 1;
      if (sum === 10) {
        digits[i] = 0;
        needAddOne = true;
      } else {
        digits[i] = sum;
        needAddOne = false;
      }
    } else {
      break;
    }
  }
  if (needAddOne) {
    digits.unshift(1);
  }

  return digits;

  //   const curCount = digits.join("") - 0;
  //   return (curCount + 1 + "").split("");
};
// @lc code=end

console.log(plusOne([1, 2, 3])); //[1,2,4]
console.log(plusOne([4, 3, 2, 1])); //[4,3,2,2]
console.log(plusOne([0])); //[1]
console.log(plusOne([9])); //[1,0]
