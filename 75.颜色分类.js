/**
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

链接：https://leetcode-cn.com/problems/sort-colors
 * 输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let len=nums.length;
  let twoCount=0;//末尾已经移过去几个二，结束while循环
  let zeroCount=0;//开始已经移过去几个0，结束while循环
  let i=0;
  while(i<len-twoCount){
    if(nums[i]===0){
      if(i===zeroCount){
        i++
      }else{
        nums.splice(i,1)
        nums.unshift(0)
      }
      zeroCount++
    }else if(nums[i]===2){
      nums.splice(i,1)
      nums.push(2)
      twoCount++
    }else{
      i++
    }
  }
  return nums
};


// 双指针，p0代表可交换0的索引,p1代表可交换1的索引，当交换了0时p0和p1需都加1
var sortColors=function(nums) {
  let p0=0,p1=0;
  for(let i=0;i<nums.length;i++){
    if(nums[i]===0){
      const m=nums[i]
      nums[i]=nums[p0]
      nums[p0]=m
      if(p0<p1){
        const m=nums[i]
      nums[i]=nums[p1]
      nums[p1]=m
      }
      p0++
      p1++
    }else if(nums[i]===1){
      const m=nums[i]
      nums[i]=nums[p1]
      nums[p1]=m
      p1++
    }
  }
  return nums
}

console.log(sortColors([2,0,2,1,1,0]));
console.log(sortColors([0,0]));