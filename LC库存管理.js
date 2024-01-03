/**
 * @param {number[]} stock
 * @return {number}
 * 仓库管理员以数组 stock 形式记录商品库存表。stock[i] 表示商品 id，可能存在重复。原库存表按商品 id 升序排列。现因突发情况需要进行商品紧急调拨，管理员将这批商品 id 提前依次整理至库存表最后。请你找到并返回库存表中编号的 最小的元素 以便及时记录本次调拨。

作者：Krahets
链接：https://leetcode.cn/leetbook/read/illustration-of-algorithm/50xofm/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
示例 1：

输入：stock = [4,5,8,3,4]
输出：3
示例 2：

输入：stock = [5,7,9,1,2]
输出：1
 */
// 数组特点：升序，且可能相同
// 查找最小元素
// 1. 取中间值
//2.中间值大于right时，最小值在右半边
//3. 中间值小于right时，最小值在左半边
//4.中间值等于right时，都有可能，缩小范围
var stockManagement = function (stock) {
  let left = 0
  let right = stock.length - 1
  while (left < right) {
    const middle = Math.floor((left + right) / 2)
    if (stock[middle] > stock[right]) {
      left = middle + 1
    } else if (stock[middle] < stock[right]) {
      right = middle
    } else {
      right -= 1
    }
  }
  return stock[left]
};
console.log(stockManagement([4, 5, 8, 3, 4]));//3
console.log(stockManagement([5, 7, 9, 1, 2]));//1