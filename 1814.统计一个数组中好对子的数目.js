/*
 * @lc app=leetcode.cn id=1814 lang=javascript
 *
 * [1814] 统计一个数组中好对子的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//  nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])

// 遍历咯
var countNicePairs = function (nums) {
  const revObj = {};
  let count = 0;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      const striLen = (nums[i] + "").length;
      const strjLen = (nums[j] + "").length;
      // 判断收尾相加个位数是否相同
      if (
        ((nums[i] % 10) + (nums[j] % Math.pow(10, strjLen))) % 10 ===
        ((nums[j] % 10) + (nums[i] % Math.pow(10, striLen))) % 10
      ) {
        const left = nums[i];
        if (revObj[left] == null) {
          revObj[left] = (nums[i] + "")?.split("")?.reverse()?.join("") - 0;
        }
        const leftRev = revObj[left];
        const right = nums[j];
        if (revObj[right] == null) {
          revObj[right] = (nums[j] + "")?.split("")?.reverse()?.join("") - 0;
        }
        const rightRev = revObj[right];
        // console.log(left,rightRev,right,leftRev);
        if (left + rightRev === right + leftRev) {
          count += 1;
        }
      }
    }
  }
  return count;
};
var countNicePairs=(nums)=>{
  const MOD = 1e9 + 7
  // 求rev反转结果
  function rev(num) {
      let v = 0
      while (num) {
          v = v * 10 + (num % 10)
          num = Math.floor(num / 10)
      }
      return v
  }

  nums = nums.map(item => {

    return item - rev(item)
  })
  // 公式转换nums[i] - rev(nums[i]) === nums[j] - rev(nums[j])
  // 转换成求nums中 i < j 且 nums[i] === nums[j]
  let ans = 0, map = new Map()
  for (let i = 0; i < nums.length; i++) {
      ans += (map.get(nums[i]) || 0) % MOD
      ans = ans % MOD
      map.set(nums[i], (map.get(nums[i]) || 0) + 1)
  }

  return ans
}
// @lc code=end
console.log(countNicePairs([42, 11, 1, 97])); //2 42+79=97+24
// console.log(countNicePairs([13, 10, 35, 24, 76])); //4
