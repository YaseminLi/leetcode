/*
 * @lc app=leetcode.cn id=2530 lang=javascript
 *
 * [2530] 执行 K 次操作后的最大分数
 * 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。你的 起始分数 为 0 。

在一步 操作 中：

选出一个满足 0 <= i < nums.length 的下标 i ，
将你的 分数 增加 nums[i] ，并且
将 nums[i] 替换为 ceil(nums[i] / 3) 。
返回在 恰好 执行 k 次操作后，你可能获得的最大分数。

向上取整函数 ceil(val) 的结果是大于或等于 val 的最小整数。


 * 输入：nums = [1,10,3,3,3], k = 3
输出：17
解释：可以执行下述操作：
第 1 步操作：选中 i = 1 ，nums 变为 [1,4,3,3,3] 。分数增加 10 。
第 2 步操作：选中 i = 1 ，nums 变为 [1,2,3,3,3] 。分数增加 4 。
第 3 步操作：选中 i = 2 ，nums 变为 [1,1,1,3,3] 。分数增加 3 。
最后分数是 10 + 4 + 3 = 17 。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var maxKelements = function (nums, k) {
  heapify(nums); // 堆化
  let ans = 0;
  while (k--) {
      ans += nums[0]; // 堆顶
      nums[0] = Math.floor((nums[0] + 2) / 3);
      sink(nums, 0); // 堆化（只需要把 nums[0] 下沉）
  }
  return ans;
};

// 原地堆化（最大堆）
// 堆化可以保证 h[0] 是堆顶元素，且 h[i] >= max(h[2*i+1], h[2*i+2])
function heapify(h) {
  // 下标 >= h.length / 2 的元素是二叉树的叶子，无需下沉
  // 倒着遍历，从而保证 i 的左右子树一定是堆，那么 sink(h, i) 就可以把左右子树合并成一个堆
  for (let i = Math.floor(h.length / 2) - 1; i >= 0; i--) {
      sink(h, i);
  }
}

// 把 h[i] 不断下沉，直到 i 的左右儿子都 <= h[i]
function sink(h, i) {
  const n = h.length;
  while (2 * i + 1 < n) {
      let j = 2 * i + 1; // i 的左儿子
      if (j + 1 < n && h[j + 1] > h[j]) { // i 的右儿子比 i 的左儿子大
          j++;
      }
      if (h[j] <= h[i]) { // 说明 i 的左右儿子都 <= h[i]，停止下沉
          break;
      }
      [h[i], h[j]] = [h[j], h[i]]; // 下沉
      i = j;
  }
}
// 一直找最大数
// var maxKelements = function (nums, k) {
//   let maxScore = 0

//   const arr = nums.sort((a, b) => b - a)
//   // todo //找前k个大的数
//   const scaleArr = arr.slice(0, k) //数组中前K个数

//   for (let count = 1; count <= k; count += 1) {
//     const curScore = scaleArr.shift()
//     maxScore += curScore
//     const newScore = Math.ceil(curScore / 3)

//     // 更新scaleArr
//     if (newScore > scaleArr[scaleArr.length - 1]) {
//       // 更新后的值大于最后一个数，更新队列
//       for (let i = 0; i < scaleArr.length; i += 1) {
//         if (newScore > scaleArr[i]) {
//           scaleArr.splice(i, 0, newScore)
//           if (scaleArr.length === k - count) {
//             scaleArr.pop()
//           }
//           break
//         }
//       }
//     }else if (scaleArr.length < k - count) {
//       scaleArr.push(newScore)
//     }
//   }
//   return maxScore

// };
// @lc code=end
console.log(maxKelements([10, 10, 10, 10, 10], 5));//50
console.log(maxKelements([1, 10, 3, 3, 3], 3));//17
console.log(maxKelements([756902131, 995414896, 95906472, 149914376, 387433380, 848985151], 6));//3603535575
console.log(maxKelements([822539285, 410243778, 843804474, 77808436, 604773488, 91882183, 983148575, 707291538, 210570310, 256880418, 744202637, 272026597, 850035362, 815964585, 161539308, 807997984, 975169847, 373595653, 740848840, 596578711, 634140518, 805359728, 893113934, 983095872, 740000028, 424404126, 645488102, 398147052, 399134531, 455173503, 762937622, 135977920, 886567539, 210644714, 441883025, 440353920, 151652262, 540667241, 41680120, 612170826, 757875616, 630417303, 829178537, 765944292, 440167660, 811916049, 764614502, 101017579, 296944070, 726251399], 53));//30403465609

