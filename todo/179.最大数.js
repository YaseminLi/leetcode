/**
 * 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。

注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。
输入：nums = [3,30,34,5,9]
输出："9534330"
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  nums.sort((a,b)=>{
    return (b+''+a)-(a+''+b)

  })

  return nums[0]?nums.join(''):'0'
};

console.log(largestNumber([3,30,34,5,9]));
console.log(largestNumber([3,30,34,0,9]));
console.log(largestNumber([10]));