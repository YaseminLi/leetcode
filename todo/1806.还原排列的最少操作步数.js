/*
 * @lc app=leetcode.cn id=1806 lang=javascript
给你一个偶数 n​​​​​​ ，已知存在一个长度为 n 的排列 perm ，其中 perm[i] == i​（下标 从 0 开始 计数）。

一步操作中，你将创建一个新数组 arr ，对于每个 i ：

如果 i % 2 == 0 ，那么 arr[i] = perm[i / 2]
如果 i % 2 == 1 ，那么 arr[i] = perm[n / 2 + (i - 1) / 2]
然后将 arr​​ 赋值​​给 perm 。

要想使 perm 回到排列初始值，至少需要执行多少步操作？返回最小的 非零 操作步数。
 *
 * [1806] 还原排列的最少操作步数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function (n) {
  let perm = [];
  let step = 0;

  for (let j = 0; j < n; j += 1) {
    perm.push(j);
  }

  let isEqual = false;
  while (!isEqual) {
    const arr = [];
    let isAllInit = true;
    for (let i = 0; i < n; i += 1) {
      arr[i] =
        i % 2 ? (arr[i] = perm[n / 2 + (i - 1) / 2]) : (arr[i] = perm[i / 2]);
      if (arr[i] !== i && isAllInit) isAllInit = false;
    }
    perm = [...arr];
    step += 1;
    if (isAllInit) {
      isEqual = true;
    }
  }
  return step;
};
// @lc code=end
console.log(reinitializePermutation(2)); //1
console.log(reinitializePermutation(4)); //2
console.log(reinitializePermutation(6)); //4
