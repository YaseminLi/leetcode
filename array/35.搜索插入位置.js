/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分查找
// 设左右指针，初始值为0 ，last
// 取左右指针的中间索引，非整数取左， 与目标值比较
// 若大于目标值，则在左区间；小于目标值则在右区间
// 继续二分
var searchInsert = function (nums, target) {
  if (nums.length === 1) {
    if (nums[0] === target) return 0;
    return nums[0] > target ? 0 : 1;
  }
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] === target) return left;
    if (nums[right] === target) return right;
    if (nums[left] > target) return left - 1 < 0 ? 0 : left - 1;
    if (nums[right] < target) return right + 1;
    if (left + 1 === right) return left + 1;

    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      left = mid;
      continue;
    }
    if (nums[mid] > target) {
      right = mid;
      continue;
    }
  }
};
var searchInsert = function (nums, target) {
  const n = nums.length;
  let left = 0, right = n - 1, ans = n;
  while (left <= right) {
    let mid = ((right - left) >> 1) + left;
    if (target <= nums[mid]) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}
// @lc code=end

console.log(searchInsert([1, 3, 5, 6], 5)); //2
console.log(searchInsert([1, 3, 5, 6], 2)); //1
console.log(searchInsert([1, 3, 5, 6], 7)); //4
console.log(searchInsert([1, 3, 5], 4)); //2
console.log(searchInsert([2, 3, 4, 8, 10], 0)); //0
console.log(searchInsert([3, 6, 7, 8, 10], 5)); //1
console.log(searchInsert([1, 3], 0)); //0
