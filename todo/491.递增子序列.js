/**
 * 给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是2。重复数字算作一种情况
示例:
输入: [4, 6, 7, 7]
输出: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
链接：https://leetcode-cn.com/problems/increasing-subsequences
 * @param {number[]} nums
 * @return {number[][]}
 */

/** 
 * 数组本身是递增的吗？不是！！
*/

// 创建container,一个[{arr:[4,6],eInd:2}]这种结构的数组，来存储还可以利用的子序列
// 当往可以利用的子序列后面添加数字时，从eInd开始循环，产生的新的子序列放入container中
// 用不到的子序列从container中移除，直到container为空
var findSubsequences = function (nums) {
  const len=nums.length
  const container = [] //存储可以利用的子序列
  const set=new Set()//用来去除重复的结果
  const result = [] //存储最后结果

  // 初始化container
  for(let i=0;i<len;i++){
    if(i===0||nums[i]!==nums[i-1]){
      container.push({
        arr:[nums[i]],
        eInd:i
      })
    }
  }
// console.log(container);
  // 循环container
  while(container[0]){
    const eInd=container[0].eInd
    const preArr=container[0].arr
    const preArrLen=preArr.length
    const preLast=preArr[preArrLen-1]
    // console.log('preArr',preArr);
    for(let i=eInd+1;i<len;i++){
      if((i-1===eInd||nums[i]!==nums[i-1])&&nums[i]>=preLast){
        const target=preArr.concat(nums[i])
        const targetStr=target.join()
        if(!set.has(targetStr)){
          set.add(targetStr)
          result.push(target)
          container.push({
            arr:target,
            eInd:i
          })
        }
      }
    }
    container.shift()
  }
  return result
};
//执行用时： 232 ms 56.52%
// 内存消耗：57.4 MB 27.78%的用户

// const arr=[4, 6, 7, 7]
const arr=[4,3,2,1]

// const arr=[1,2,3,1,1,1,1,1]
console.log(findSubsequences(arr));
