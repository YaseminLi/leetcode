/*
 * @lc app=leetcode.cn id=1630 lang=javascript
 *
 * [1630] 等差子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  const result = [];
  for (let i = 0; i < l.length; i += 1) {
    const startIndex = l[i];
    const endIndex = r[i];
    let isEqualDifference = true;
    const subArr = nums.slice(startIndex, endIndex + 1).sort((a, b) => a - b);
    // console.log("---------- ~ checkArithmeticSubarrays ~ subArr:", subArr);

    const diffValue = subArr[1] - subArr[0];

    for (let j = 2; j < subArr.length; j += 1) {
      if (subArr[j] - subArr[j - 1] !== diffValue) {
        isEqualDifference = false;
        break;
      }
    }

    result[i] = isEqualDifference;
  }

  return result;
};
// @lc code=end
console.log(checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5])); //[true,false,true]
console.log(
  checkArithmeticSubarrays(
    [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10],
    [0, 1, 6, 4, 8, 7],
    [4, 4, 9, 7, 9, 10]
  )
); //[false,true,false,false,true,true]
console.log(checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5])); //[true,false,true]
