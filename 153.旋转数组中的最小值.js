/**
 * 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]
注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。
输入：nums = [4,5,6,7,0,1,2]
输出：0
解释：原数组为 [0,1,2,4,5,6,7] ，旋转 4 次得到输入数组。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function (nums) {

//   while (nums[0] > nums[nums.length - 1]) {
//     nums.shift()
//   }


//   return nums[0]

// };


//二分法
// 找第一个比前面数小的
var findMin = function (nums) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    const middle = Math.floor((left + right) / 2)
    if (nums[middle] > nums[right]) {
      left = middle + 1
    }else {
      right=middle
    }
  }
  return nums[left]
}
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([3, 1, 2]));