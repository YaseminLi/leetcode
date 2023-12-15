/**
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

 

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯
// 当前组合的arr
// reMainArr 余下的未使用的arr
var permute = function(nums) {
  const ret=[]
  const used={}
  const helper=(arr)=>{
      if(arr.length===nums.length){
          ret.push(arr)
          return
      }
      
      for(let i=0;i<nums.length;i+=1){
        if(used[i])continue
          // arr.push(nums[i])
          used[i]=true
          helper(arr.concat(nums[i]))
          // arr.pop()
          used[i]=false
      }
  }
  helper([],nums)
  return ret
};
console.log(permute([1,2,3]));