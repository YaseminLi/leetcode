/**
 * @Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
链接：https://leetcode-cn.com/problems/two-sum

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//for循环+indexof 用时180ms.内存33.7MB
// let twoSum = function (nums, target) {
//     let indexArr = []
//     for (let i = 0; i < nums.length; i++) {
//         let j = target - nums[i]
//         let search = nums.indexOf(j, i + 1)
//         if (search > 0) {
//             indexArr = [i, search]
//             break
//         }
//     }
//     return indexArr
// };

//map方法 用时72ms.内存35.6MB
// let twoSum = function (nums, target) {
//     let indexArr = []
//     let map = new Map()
//     nums.forEach((item, index) => {
//         map.set(item, index)
//     });
//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(target - nums[i]) && map.get(target - nums[i]) != i) {
//             indexArr = [i, map.get(target - nums[i])]
//             break
//         }
//     }
//     return indexArr
// };
// let nums = [2, 7, 11, 15]
// let target = 9

// let indexArr = twoSum(nums, target)
// console.log(indexArr);

//hash表
let twoSum=function (nums,target) {
    let numsObj={}
    for(let i=0;i<nums.length;i++){
        let current=nums[i]
        let match=target-current 
        if(match in numsObj){
            return [i,numsObj[match]]
        }else{
            numsObj[current]=i
        }
    }
}
let nums = [2, 7, 11, 15]
let target = 9
let indexArr = twoSum(nums, target)
console.log(indexArr);
