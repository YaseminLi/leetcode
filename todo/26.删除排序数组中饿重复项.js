/**
 * @param {number[]} nums
 * @return {number}
 */

 //方法一：用splice内存消耗大，效率慢
// var removeDuplicates = function(nums) {
//     for(let i=1;i<nums.length;i++){
//         if(nums[i]===nums[i-1]){
//             nums.splice(i,1)
//             i--
//         }
//     }
//     return nums.length
// };

//方法二：双指针
var removeDuplicates = function(nums) {
    let i=0
    for(let j=1;j<nums.length;j++){
        if(nums[j]!==nums[i]){
            i+=1
            nums[i]=nums[j]
        }
    }
    return  i+1
};
console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([1]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
