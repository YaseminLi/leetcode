/**
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。
 * 输入：s = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

 //infinity 好用！
var minSubArrayLen = function (s, nums) {
  let areaLen = Infinity; //记录子数组的最小长度
  let curS = nums[0]; //当前前后两个指针范围内的数字和
  let i = j = 0
  while (j < nums.length) {
    if (curS >= s) {
      areaLen =Math.min(j - i + 1,areaLen)
      curS -= nums[i]
      i++
    } else if (curS < s) {
      j++
      if (j < nums.length) {
        curS += nums[j]
      }
    }
  }
  return areaLen===Infinity?0:areaLen
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));//2
console.log(minSubArrayLen(15, [2, 3, 1, 2, 4, 3]));//6
console.log(minSubArrayLen(1, [2, 3, 1, 2, 4, 3]));//1
console.log(minSubArrayLen(15, [5,1,3,5,10,7,4,9,2,8]));//2