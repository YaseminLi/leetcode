/**
 * @param {number[]} nums
 * @return {number[][]}
 * @example  Given array nums = [-1, 0, 1, 2, -1, -4],
                A solution set is:
                [
                [-1, 0, 1],
                [-1, -1, 2]
                ]

                链接：https://leetcode-cn.com/problems/3sum
 */
//超出时间限制了。。。。
var threeSum = function (nums) {
    let arr = []
    nums = nums.sort((a,b)=>{return a-b})
    let len = nums.length
    for (let i = 0; i < len; i++) {
        if (nums[i] == nums[i - 1]) { continue }
        for (let j = i + 1; j < len; j++) {
            if (j>i+1&&nums[j] == nums[j - 1]) { continue }
            let target = 0 - nums[i] - nums[j]
            let index = nums.indexOf(target, j + 1)
            if (index > -1) {
                arr.push([nums[i], nums[j], target])
            }
        }
    }
    return arr
};
let nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums));
