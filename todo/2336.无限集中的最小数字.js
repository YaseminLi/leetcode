/*
 * @lc app=leetcode.cn id=2336 lang=javascript
 *
 * [2336] 无限集中的最小数字
 * 现有一个包含所有正整数的集合 [1, 2, 3, 4, 5, ...] 。

实现 SmallestInfiniteSet 类：

SmallestInfiniteSet() 初始化 SmallestInfiniteSet 对象以包含 所有 正整数。
int popSmallest() 移除 并返回该无限集中的最小整数。
void addBack(int num) 如果正整数 num 不 存在于无限集中，则将一个 num 添加 到该无限集中。
 */

// @lc code=start

// var SmallestInfiniteSet = function () {
//   const list = []
//   for (let i = 0; i < 1000; i += 1) {
//     list[i] = i + 1
//   }
//   this.data = list
// };

// /**
//  * @return {number}
//  */
// SmallestInfiniteSet.prototype.popSmallest = function () {
//   return this.data.shift()
// };

// /** 
//  * @param {number} num
//  * @return {void}
//  */
// SmallestInfiniteSet.prototype.addBack = function (num) {
//   const targetIndex = this.data.findIndex(item => item >= num)
//   if (this.data[targetIndex] === num) {
//     //想等，不处理
//   } else {
//     //插入到targetIndex前一个
//     if (targetIndex === 0) {
//       this.data.unshift(num)
//     } else {
//       this.data.splice(targetIndex, 0, num)
//     }
//   }
// };

// 记录删除过的数组

var SmallestInfiniteSet = function () {
  this.deleteList = []
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  // deleteList中添加
  this.deleteList.push()
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  // 如果删除过，在的deleteList中去除，否则不操作
  const target = this.deleteList.findIndex(item => item === num)
  if (target > -1) {
    this.deleteList.splice(target, 1)
  }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
// @lc code=end
// 0<num<1000
const smallestInfiniteSet = new SmallestInfiniteSet();
smallestInfiniteSet.addBack(2);    // 2 已经在集合中，所以不做任何变更。
smallestInfiniteSet.popSmallest(); // 返回 1 ，因为 1 是最小的整数，并将其从集合中移除。
smallestInfiniteSet.popSmallest(); // 返回 2 ，并将其从集合中移除。
smallestInfiniteSet.popSmallest(); // 返回 3 ，并将其从集合中移除。
smallestInfiniteSet.addBack(1);    // 将 1 添加到该集合中。
smallestInfiniteSet.popSmallest(); // 返回 1 ，因为 1 在上一步中被添加到集合中，
// 且 1 是最小的整数，并将其从集合中移除。
smallestInfiniteSet.popSmallest(); // 返回 4 ，并将其从集合中移除。
smallestInfiniteSet.popSmallest(); // 返回 5 ，并将其从集合中移除。

// const smallestInfiniteSet = new SmallestInfiniteSet();
// smallestInfiniteSet.popSmallest(); // 返回 3 ，并将其从集合中移除。
// smallestInfiniteSet.addBack(1);    // 将 1 添加到该集合中。
// smallestInfiniteSet.popSmallest(); // 返回 1 ，因为 1 是最小的整数，并将其从集合中移除。
// smallestInfiniteSet.popSmallest(); // 返回 2 ，并将其从集合中移除。

// smallestInfiniteSet.popSmallest(); // 返回 1 ，因为 1 在上一步中被添加到集合中，
// smallestInfiniteSet.addBack(2);    // 2 已经在集合中，所以不做任何变更。
// smallestInfiniteSet.addBack(3);    // 2 已经在集合中，所以不做任何变更。
// console.log(smallestInfiniteSet);
// // 且 1 是最小的整数，并将其从集合中移除。
// smallestInfiniteSet.popSmallest(); // 返回 4 ，并将其从集合中移除。
// smallestInfiniteSet.popSmallest(); // 返回 5 ，并将其从集合中移除。
//[null,1,null,1,2,3,null,null,2,3]
// ["SmallestInfiniteSet","popSmallest","addBack1","popSmallest","popSmallest","popSmallest","addBack2","addBack3","popSmallest","popSmallest"]
