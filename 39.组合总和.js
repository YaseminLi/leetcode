/**
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
candidates 中的数字可以无限制重复被选取。
链接：https://leetcode-cn.com/problems/combination-sum
输入：candidates = [2,3,5], target = 8,
所求解集为：
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum = function (candidates, target) {
//   const result = [] //存放输出的组合
//   const len = candidates.length
//   for (let i = 0; i < len - 1; i++) {
//     const cur = candidates[i]
//     if (cur === target) {
//       result.push([cur])
//     } else {
//       const tarArr = candidates.slice(i)
//       const resArr = combinationSum(candidates, target - candidates[i])
//       resArr.forEach(item => {
//         result.push(item.unshift(cur))
//       })
//     }
//   }
//   return result
// };

// const candidates = [2, 3, 6, 7]
// const target = 7
// console.log(combinationSum(candidates, target));


// 数组是升序？？
// 回溯算法
// arr 已经选择的元素 sum 已经选择的元素和 start遍历的起始指针
var combinationSum = function (candidates, target) {
  const ret = []
  const dfs = (arr, sum, start) => {
    if(sum>=target){
      if(sum===target){
        ret.push(arr.concat())
      }
      return
    }
    for (let i = start; i < candidates.length; i++) {
        arr.push(candidates[i])
        dfs(arr, sum+candidates[i], i)
        arr.pop()
    }
  }

  dfs([], 0, 0)
  return ret
};


const candidates = [2, 3, 6, 7]
const target = 7
console.log(combinationSum(candidates, target));
console.log(combinationSum([2,3,5], 8));
console.log(combinationSum([2,7,6,3,5,1], 9));