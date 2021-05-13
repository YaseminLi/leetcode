/**
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

 

示例 1：

输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
示例 2：

输入：target = 4, nums = [1,4,4]
输出：1
示例 3：

输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0

链接：https://leetcode-cn.com/problems/minimum-size-subarray-sum
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// 滑动窗口
// 当前和不够，right+；和超了,left-1
var minSubArrayLen = function (target, nums) {
  let sum = nums[0]//当前前后两个指针范围内的数字和
  let minLen = Infinity //记录子数组的最小长度
  let left = 0, right = 0;
  while (right < nums.length) {
    while (sum >= target) {
      minLen=Math.min(minLen,right-left+1)
      if (minLen === 1) return 1
      sum -= nums[left]
      left += 1
    }
    right += 1
    sum += nums[right]
  }
  return minLen === Infinity ? 0 : minLen
};

const cases = [
  // {
  //   nums: [2, 3, 1, 2, 4, 3],
  //   target: 7,
  //   expect: 2,
  // },
  // {
  //   nums: [1, 4, 4],
  //   target: 4,
  //   expect: 1,
  // },
  // {
  //   nums: [1, 1, 1, 1, 1, 1, 1, 1],
  //   target: 11,
  //   expect: 0,
  // },
  {
    nums: [1, 2, 3, 4, 5],
    target: 11,
    expect: 3,
  },
];
function unitTest () {
  for (let ca of cases) {
    try {
      let result = minSubArrayLen(ca.target, ca.nums,);
      if (result !== ca.expect) {
        console.log("not pass:", ca, result);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

unitTest();