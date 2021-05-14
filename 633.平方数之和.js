/**
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。

示例 1：

输入：c = 5
输出：true
解释：1 * 1 + 2 * 2 = 5
示例 2：

输入：c = 3
输出：false
链接：https://leetcode-cn.com/problems/sum-of-square-numbers
 * @param {number} c
 * @return {boolean}
 */

// 双指针
 var judgeSquareSum = function(c) {
  let max=Math.floor(Math.sqrt(c)) //可取的最大数
  let min=0
  while(min<=max){
      const sum=min*min+max*max
      if(sum===c){
          return true
      }else if(sum>c){
          max-=1
      }else {
          min+=1
      }
  }
  return false
};