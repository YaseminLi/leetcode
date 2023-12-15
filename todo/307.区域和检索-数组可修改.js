/*
 * @lc app=leetcode.cn id=307 lang=javascript
 *
 * [307] 区域和检索 - 数组可修改
 * 给你一个数组 nums ，请你完成两类查询。

其中一类查询要求 更新 数组 nums 下标对应的值
另一类查询要求返回数组 nums 中索引 left 和索引 right 之间（ 包含 ）的nums元素的 和 ，其中 left <= right
实现 NumArray 类：

NumArray(int[] nums) 用整数数组 nums 初始化对象
void update(int index, int val) 将 nums[index] 的值 更新 为 val
int sumRange(int left, int right) 返回数组 nums 中索引 left 和索引 right 之间（ 包含 ）的nums元素的 和 （即，nums[left] + nums[left + 1], ..., nums[right]）
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  console.log("NumArray ～～～ nums:", nums)
  this.data = nums
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  this.data[index] = val
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  let sum = 0
  for (let i = left; i < right + 1; i += 1) {
    sum += this.data[i]
  }
  return sum
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
// @lc code=end
//[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]  [null, 9, null, 8]
console.log(new NumArray([[-1]]));//["NumArray", "sumRange", "update", "sumRange"]
console.log(new NumArray([0, 2]));//["NumArray", "sumRange", "update", "sumRange"]
console.log(new NumArray([1, 2]));//["NumArray", "sumRange", "update", "sumRange"]
console.log(new NumArray([0, 2]));//["NumArray", "sumRange", "update", "sumRange"]
//

