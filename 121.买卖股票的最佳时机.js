/**
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。


示例 1：

输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
示例 2：

输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
 * @param {number[]} prices
 * @return {number}
 */


// 维护一个长度为prices.length的数组，每项为第i天卖出获得利润，i变化时，更新最大利润
// 时间复杂度n2
 var maxProfit = function(prices) {
    let maxProfitNum=0
    for(let i=0;i<prices.length;i+=1){
      for(let j=0;j<=i;j+=1){
        let profit=prices[i]-prices[j]
        if(profit<0)profit=0
        maxProfitNum=Math.max(maxProfitNum,profit)
      }
    }
    return maxProfitNum
};


// 动态规划 dp[i]表示前i天的最大利润
// 维护一个minPrice
// dp[i]=Math.max(dp[i-1],prices[i]-minPrice)


var maxProfit=function (prices) {
  if(prices.length===1) return 0
  let minPrice=prices[0]
  let maxProfitNum=0

  for(let i=1;i<prices.length;i+=1){
    minPrice=Math.min(minPrice,prices[i])
    maxProfitNum=Math.max(maxProfitNum,prices[i]-minPrice)
  }

  return maxProfitNum
}
console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([1,2]));