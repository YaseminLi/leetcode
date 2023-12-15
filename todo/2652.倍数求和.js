/*
 * @lc app=leetcode.cn id=2652 lang=javascript
 *
 * [2652] 倍数求和 3\5\7
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
  let sum=0
  for(let i=1;i<=n;i+=1){
    if(i%3===0||i%5===0||i%7===0){
      sum+=i
    }
  }
return sum
};
// @lc code=end

console.log(sumOfMultiples(7));//21
console.log(sumOfMultiples(10));//40
console.log(sumOfMultiples(9));//30

