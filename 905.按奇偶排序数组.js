/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// index1 奇数的起始位  index2遍历位置
// index2 奇数时 index2+=1
// index2 偶数时 和index1交换位置，index1+=1 index2+=1
var sortArrayByParity = function (nums) {
  let ind1 = 0;
  let ind2 = 0;
  while (ind2 < nums.length) {
    if (nums[ind2] % 2) {
      //奇数
      ind2 += 1;
    } else {
      //偶数
      if (ind1 !== ind2) {
        //交换
        const m = nums[ind1];
        nums[ind1] = nums[ind2];
        nums[ind2] = m;
      }
      ind1 += 1;
      ind2 += 1;
    }
  }
  return nums;
};
// @lc code=end
console.log(sortArrayByParity([3, 1, 2, 4])); //[2,4,3,1]
console.log(sortArrayByParity([0])); //[0]
console.log(sortArrayByParity([2, 4, 3, 1])); //[0]
console.log(sortArrayByParity([3, 1, 2, 4])); //[0]
console.log(sortArrayByParity([2, 4, 6, 8])); //[0]
console.log(sortArrayByParity([1, 3, 5, 7])); //[0]
