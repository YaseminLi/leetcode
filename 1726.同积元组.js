/*
 * @lc app=leetcode.cn id=1726 lang=javascript
 *
 * [1726] 同积元组
 * 给你一个由 不同 正整数组成的数组 nums ，请你返回满足 a * b = c * d 的元组 (a, b, c, d) 的数量。其中 a、b、c 和 d 都是 nums 中的元素，且 a != b != c != d 。
 * 输入：nums = [1,2,4,5,10]
输出：16
解释：存在 16 个满足题意的元组：
(1,10,2,5) , (1,10,5,2) , (10,1,2,5) , (10,1,5,2)
(2,5,1,10) , (2,5,10,1) , (5,2,1,10) , (5,2,10,1)
(2,10,4,5) , (2,10,5,4) , (10,2,4,5) , (10,2,4,5)
(4,5,2,10) , (4,5,10,2) , (5,4,2,10) , (5,4,10,2)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// map key积 value，数组list
var tupleSameProduct = function (nums) {
  const map = new Map()
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      const product = nums[i] * nums[j]
      const curProductList = map.get(product)
      map.set(product, [...(curProductList || []), [nums[i], nums[j]]])
    }
  }

  let count=0
  for (let [key, value] of map.entries()) {
    if (value.length < 2) {
      map.delete(key)
    }else{
      count+=8*value.length*(value.length-1)/2 // todo -8  三个
    }
  }
  return count 

};
// @lc code=end
console.log(tupleSameProduct([2, 3, 4, 6]));//8
console.log(tupleSameProduct([1, 2, 4, 5, 10]));//16

