/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 * 示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/kth-largest-element-in-an-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 选择排序 超时
// 选择最大的值，和未排序的位置交换
// var findKthLargest = function (nums, k) {
//   let j = 0;// 未排序过最大值的第一个索引
//   while (j <= k) {
//     let i = j;// 当前遍历的起始索引
//     let curMaxIndex = i
//     while (i < nums.length) {
//       if (nums[i] > nums[curMaxIndex]) {
//         curMaxIndex = i
//       }
//       i += 1
//     }
//     //curMaxIndex和j交换
//     const temp = nums[j]
//     nums[j] = nums[curMaxIndex]
//     nums[curMaxIndex] = temp
//     j += 1
//   }
//   return nums[k - 1]
// };

// 构建一个最大堆
class MaxHeap {
  constructor(arr) {
    // this.capcity=capcity
    this.data = arr
    this.count = arr.length
    // this.count=0
  }

  shiftDown(k) {
    let min = this.data[k]
    while (k * 2 + 1 <= this.count - 1) {
      //有子节点
      let j = k * 2 + 1
      if (j + 1 <= (this.count - 1) && this.data[j + 1] > this.data[j]) {
        j += 1
      }
      if (min >= this.data[j]) {
        break
      }
      this.data[k] = this.data[j]
      k = j
    }
    this.data[k] = min
  }

}
var findKthLargest = function (nums, k) {
  const heap = new MaxHeap(nums)
  for (let i = Math.floor((nums.length - 2) / 2); i >= 0; i -= 1) {
    heap.shiftDown(i)
  }
  //取出最大堆的头
  for (let i = 0; i < k - 1; i += 1) {
    const target = heap.data.pop()
    heap.data[0] = target
    heap.count -= 1
    heap.shiftDown(0)
  }

  return heap.data[0]
};
// @lc code=end
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));//4
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));//5
console.log(findKthLargest([2, 1], 2));//1

