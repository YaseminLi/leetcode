/**
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


示例 1:

输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
示例 2:

输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1

链接：https://leetcode-cn.com/problems/binary-search
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 二分查找
var search = function(nums, target) {
  const len=nums.length
  
  if(target<nums[0]||nums[len-1]<target) return -1
  if(nums[0]===target) return 0
  if(nums[len-1]===target) return len-1

  let targetInd=-1
  let left=0
  let right=len-1
  while(left+1<right){
    const middle=Math.floor((left+right)/2)
    if(nums[middle]===target){
      return middle
    }else if(nums[middle]<target){
      left=middle
    }else {
      right=middle
    }
  }
  return targetInd
};

const cases = [
  {
    nums:  [-1,0,3,5,9,12],
    target:9,
    expect: 4,
  },
  {
    nums:  [-1,0,3,5,9,12],
    target:2,
    expect: -1,
  },
  {
    nums:  [-1],
    target:-1,
    expect: 0,
  },
];
function unitTest() {
  for (let ca of cases) {
    try {
      let result = search(ca.nums,ca.target);
      if (result !== ca.expect) {
        console.log("not pass:", ca, result);
      }
    } catch (error) {
      console.log(error);
    }
  }
  console.log('pass!!!');
}

unitTest();