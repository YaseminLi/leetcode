/**
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
输入: [10,9,2,5,3,7,101,18]
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
链接：https://leetcode-cn.com/problems/longest-increasing-subsequence
 * @param {number[]} nums
 * @return {number}
 */

//贪心算法，每一项尽可能的小，子序列会尽可能长
//创建一个数组d[],来存储当前找到的最长子序列,
//当nums[i]大于当最后一项 直接放入d中，
//否则，在d中寻找第一个大于nums[i]的d[k],替换d[k] 为nums[i]
var lengthOfLIS = function (nums) {
  const len=nums.length
  if(len<2){
    return len
  }

  const d=[nums[0]]
  let max=1 //当前d的长度

  for(let i=1;i<len;i++){
    if(nums[i]>d[max-1]){
      d.push(nums[i])
      max+=1
    }else {
      //二分法查找第一个大于nums[i]的值
      let l=0,r=max
      while (l<r){
        const mid=(l+r)/2|0 //取整数部分
        d[mid]<nums[i]?(l=mid+1):r=mid
      }
      d[r]=nums[i]
    }
  }
  return max
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));//4
console.log(lengthOfLIS([2]));//1
console.log(lengthOfLIS([2,6,7,10,11,4]));//5
console.log(lengthOfLIS([4,10,4,3,8,9]));//3
console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]));//3