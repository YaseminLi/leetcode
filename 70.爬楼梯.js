/**
 * 输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。
 * @param {number} n
 * @return {number}
 */


// 动态规划
// 拆解成，爬第n阶楼梯的方法数量，等于 2 部分之和

// 爬上 n-1n−1 阶楼梯的方法数量。因为再爬1阶就能到第n阶
// 爬上 n-2n−2 阶楼梯的方法数量，因为再爬2阶就能到第n阶

 var climbStairs = function(n) {
   const dp=[0,1,2]
   if(n<3)return dp[n]
   for(let i=3;i<=n;i+=1){
      dp[i]=dp[i-1]+dp[i-2]
   }
   return dp[n]
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));