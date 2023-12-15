/**
 * 给定一个增序排列数组 nums ，你需要在 原地 删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii
输入：nums = [1,1,1,2,2,3]
输出：5, nums = [1,1,2,2,3]
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
  const len=nums.length
  if(len<=1)return len
  let j=1;//当前元素已经出现几次
  let k=0;//符合要求的元素下标尾
  for (let i=1;i<len;i++){
      if(nums[i]===nums[k]){
          if(j==1){
              j+=1
              k+=1
              nums[k]=nums[i]
          }
      }else{
          j=1
          k+=1
          nums[k]=nums[i]
      }
  }
  return k+1
};

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));//7
console.log(removeDuplicates([1,1,1,2,2,3]));//5