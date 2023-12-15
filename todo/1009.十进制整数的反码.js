/*
 * @lc app=leetcode.cn id=1009 lang=javascript
 *
 * [1009] 十进制整数的反码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 转2进制除以2取余数
// 取反
// 转十进制
var bitwiseComplement = function (n) {
  const remainderArr = [];

  let temp = n;
  if (temp) {
    while (temp) {
      remainderArr.push(Number(!(temp % 2)));
      temp = Math.floor(temp / 2);
    }
  } else {
    remainderArr.push(1);
  }

  let ret = 0;
  remainderArr.forEach((item, i) => {
    if (item) {
      ret += Math.pow(2, i);
    }
  });
  return ret;
};
// @lc code=end
console.log(bitwiseComplement(5)); //2 5 的二进制表示为 "101"，其二进制反码为 "010"，也就是十进制中的 2 。
console.log(bitwiseComplement(7)); //0 7 的二进制表示为 "111"，其二进制反码为 "000"，也就是十进制中的 0 。
console.log(bitwiseComplement(10)); //5 10 的二进制表示为 "1010"，其二进制反码为 "0101"，也就是十进制中的 5 。
console.log(bitwiseComplement(0)); //1 10 的二进制表示为 "1010"，其二进制反码为 "0101"，也就是十进制中的 5 。
