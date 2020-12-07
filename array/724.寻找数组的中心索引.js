/**
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
  i=0;
  j = nums.length - 1
  while (i <= j) {
    sum-=nums[i]
    if (leftSum === sum) {
      return i
    } else {
      leftSum+=nums[i++]
    }
  }
  return -1
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); //3
console.log(pivotIndex([1, 2, 3])); //-1
console.log(pivotIndex([2, 3, 2])); //1
console.log(pivotIndex([-1, -1, -1, -1, -1, 0])); //2
console.log(pivotIndex([-1, -1, -1, 0, 1, 1])); //0
console.log(pivotIndex([-1, -1, 0, 0, -1, -1])); //2
console.log(pivotIndex([-1,-1,0,1,1,0])); //5