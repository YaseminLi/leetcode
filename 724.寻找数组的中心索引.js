/**
 * 给你一个整数数组 nums ，请计算数组的 中心下标 。

数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。

如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。

如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。

 

示例 1：

输入：nums = [1, 7, 3, 6, 5, 6]
输出：3
解释：
中心下标是 3 。
左侧数之和 sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11 ，
右侧数之和 sum = nums[4] + nums[5] = 5 + 6 = 11 ，二者相等。
示例 2：

输入：nums = [1, 2, 3]
输出：-1
解释：
数组中不存在满足此条件的中心下标。
示例 3：

输入：nums = [2, 1, -1]
输出：0
解释：
中心下标是 0 。
左侧数之和 sum = 0 ，（下标 0 左侧不存在元素），
右侧数之和 sum = nums[1] + nums[2] = 1 + -1 = 0 。

 * @param {number[]} nums
 * @return {number}
 */
// 双指针，计算头尾两端遍历过的元素和
//每移动一个元素就比较和，和较小的一端继续移动，直到索引相邻
// 这种方法不行，负数时会越
var pivotIndex = function (nums) {
  let i = 0;
  j = nums.length - 1
  let leftSum = 0,
    rightSum = -Infinity;
  while (i <= j) {
    if (leftSum < rightSum) {
      leftSum += nums[i++]
    } else if (leftSum > rightSum) {
      rightSum === -Infinity ? rightSum = nums[j--] : rightSum += nums[j--]
    } else if (i === j) {
      return i
    } else leftSum += nums[i++]
  }
  return -1
};

//方法二：
// 先计算总和，从头开始遍历，看左右是否相等
var pivotIndex = function (nums) {
  let i = 0;
  j = nums.length - 1, sum = 0, leftSum = 0
  if (j < 2) return -1
  while (i <= j) {
    sum += nums[i]
    i++
  }
  i = 0;
  j = nums.length - 1
  while (i <= j) {
    sum -= nums[i]
    if (leftSum === sum) {
      return i
    } else {
      leftSum += nums[i++]
    }
  }
  return -1
};

var pivotIndex = function (nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (2 * sum + nums[i] === total) {
      return i;
    }
    sum += nums[i];
  }
  return -1;
};


console.log(pivotIndex([1, 7, 3, 6, 5, 6])); //3
console.log(pivotIndex([1, 2, 3])); //-1
console.log(pivotIndex([2, 3, 2])); //1
console.log(pivotIndex([-1, -1, -1, -1, -1, 0])); //2
console.log(pivotIndex([-1, -1, -1, 0, 1, 1])); //0
console.log(pivotIndex([-1, -1, 0, 0, -1, -1])); //2
console.log(pivotIndex([-1, -1, 0, 1, 1, 0])); //5