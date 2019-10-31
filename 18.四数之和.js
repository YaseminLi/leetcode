/**
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
链接：https://leetcode-cn.com/problems/4sum
示例：

给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]

 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
//同twoSum,考虑和twoSum一样，两层遍历先计算两个数的和
//条件判断：长度小于4返回空；当前四个数大于target,break
var fourSum = function (nums, target) {
    let len = nums.length
    if (len < 4) {
        return []
    }
    let targets = []
    //从小到大排列
    nums.sort((a,b)=>a-b)
    //第一层遍历，找第一个数，到倒数第四个数为止
    for (let i = 0; i < len - 3; i++) {
        //跳过重复的i
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        //如果当前四个数字的和大于target
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
            break
        }
        //第二层遍历，从i+1开始，到倒数第三个数为止
        for (let j = i + 1; j < len - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue
            }
            //找另外两个数
            let searchTarget=target-nums[i]-nums[j]
            //双指针
            let l = j + 1
            let r = len - 1
            while (l < r) {
                let sum = nums[l] + nums[r]
                if (sum === searchTarget) {
                    targets.push([nums[i], nums[j], nums[l], nums[r]])
                }
                if (sum <= searchTarget) {
                    while (nums[l] === nums[++l]){
                    }
                } else {
                    while (nums[r] === nums[--r]){}
                }
            }
            //hash数组
            // let searchTarget=target-nums[i]-nums[j]
            // let searchObj = {}
            // for (let k = j+1; k <len; k++) {
            //     let current = nums[k]
            //     let match = searchTarget - current
            //     if (match in searchObj&&searchObj[match]!==-1) {
            //         targets.push([nums[i],nums[j],current,match])
            //         searchObj[match]=-1
            //     } else {
            //         if(searchObj[match]===-1){
            //             continue
            //         }
            //         searchObj[current] = k
            //     }
            // }
        }
    }
    return targets
};
// let nums=[ -1, -2, -3, 0, 0, 1, 2, 3 ]
let nums = [-10, -2, -3, -4, -9, -9, 0, 10, 2, 2, 2, 2, 2, 7, 8]
let target = 6
console.log(fourSum(nums, target))