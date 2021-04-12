/**
 * 给你一个整数 n ，请你找出并返回第 n 个 丑数 。
丑数 就是只包含质因数 2、3 和/或 5 的正整数。
输入：n = 10
输出：12
解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。
链接：https://leetcode-cn.com/problems/ugly-number-ii
 * @param {number} n
 * @return {number}
 */
//第1-9项无规律，第10-13分别为6-9项乘2，第10-13分别为6-9项乘2乘2
var nthUglyNumber = function(n) {
 if(n<=5){
   return n
 }

 const map={
   1:2*3,
   2:2*2*2,
   3:3*3,
   4:2*5
 }

 let index=(n-5)%4
 let count=Math.floor((n-5)/4)
 if(index===0){
   count-=1
   index=4
 }

 return map[index]*Math.pow(2,count)

};

for(let i=1;i<20;i+=1){
  console.log(nthUglyNumber(i));
}
