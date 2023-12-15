/*
 * @lc app=leetcode.cn id=2520 lang=javascript
 *
 * [2520] 统计能整除数字的位数
 * 给你一个整数 num ，返回 num 中能整除 num 的数位的数目。

如果满足 nums % val == 0 ，则认为整数 val 可以整除 nums 。
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
  return (num+'0').split('')?.filter(item=>num%item==0)?.length||0
};
// @lc code=end
console.log(countDigits(7));//1
console.log(countDigits(121));//2
console.log(countDigits(1248));//4

