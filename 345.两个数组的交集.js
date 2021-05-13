/**
 * 给定两个数组，编写一个函数来计算它们的交集。

 

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/intersection-of-two-arrays
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 将数组1，放在set中存储
// 遍历数组2，判断是否存在于set中
var intersection = function (nums1, nums2) {
  const set = new Set(nums1)
  const ret=[]
  for (let i = 0; i < nums2.length; i += 1) {
    if(set.has(nums2[i])){
      set.delete(nums2[i])
      ret.push(nums2[i])
    }
  }

  return ret
};

console.log(intersection([1,2,2,1],[2,2]));
console.log(intersection([4,9,5],[9,4,9,8,4]));