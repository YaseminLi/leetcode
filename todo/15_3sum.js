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
// var threeSum = function (nums) {
//     let arr = []
//     nums = nums.sort((a,b)=>{return a-b})
//     let len = nums.length
//     for (let i = 0; i < len; i++) {
//         if (nums[i] == nums[i - 1]) { continue }
//         for (let j = i + 1; j < len; j++) {
//             if (j>i+1&&nums[j] == nums[j - 1]) { continue }
//             let target = 0 - nums[i] - nums[j]
//             let index = nums.indexOf(target, j + 1)
//             if (index > -1) {
//                 arr.push([nums[i], nums[j], target])
//             }
//         }
//     }
//     return arr
// };
// let threeSum=function (nums) {
//     let target=[]
//     let len=nums.length
//     if(len<3){
//         return []
//     }
//     nums.sort((a,b)=>a-b)
//     for(let i=0;i<len;i++){
//         if(i>0&&nums[i]===nums[i-1]){
//             continue
//         }
//         if(nums[i]>0||nums[i]+nums[i+1]+nums[i+2]>0){
//             break
//         }
//         let l=i+1
//         let r=len-1
//         let targetSum=0-nums[i]
//         while(l<r){
//             let sum=nums[l]+nums[r]
//             if(sum===targetSum){
//                 target.push([nums[i],nums[l],nums[r]])
//             }
//             if(sum<=targetSum){
//                 while(nums[l]===nums[++l]){}
//             }
//             if(sum>targetSum){
//                 while(nums[r]===nums[--r]){}
//             }
//         }
//     }
//     return target
// }


var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    const ret=[]
    for(let i=0;i<nums.length-2;i+=1){
        if(i>0&&nums[i]===nums[i-1]) continue
        if(nums[i]>0||nums[i]+nums[i+1]+nums[i+2]>0) break
        const twoSum=0-nums[i]
        let l=i+1
        let r=nums.length-1
        while(l<r){
            const sum=nums[l]+nums[r]
            const n1=nums[l]
            const n2=nums[r]
            if(sum===twoSum){
                ret.push([nums[i],nums[l],nums[r]])
                while(l<r&&nums[l]===n1){l++}
                while(l<r&&nums[r]===n2){r--}
            }else if(sum<twoSum){
                l++
            }else{
                r--
            }
        }

    }
    return ret
};
let nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums));
console.log(threeSum([1,-1,-1,0]));
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));
