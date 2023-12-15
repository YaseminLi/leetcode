/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
//取余数 从后往前塞
var convertToTitle = function (columnNumber) {
  const str = "ZABCDEFGHIJKLMNOPQRSTUVWXY";
  const ret = [];
  let curNumber = columnNumber;
  while (curNumber) {
    // if (curNumber === 26) {
    //   ret.unshift("Z");
    //   break;
    // }
    const sort = str[curNumber % 26];
    curNumber = Math.floor(curNumber / 26);
    if (sort === "Z") {
      curNumber -= 1;
    }
    ret.unshift(sort);
  }

  return ret.join("");
};
// @lc code=end

console.log(convertToTitle(1)); //"A"
console.log(convertToTitle(28)); //"AB"
console.log(convertToTitle(701)); //"ZY"
console.log(convertToTitle(2147483647)); //"FXSHRXW"
console.log(convertToTitle(52)); //"AZ"
