/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。https://leetcode-cn.com/problems/search-insert-position/
 */
var searchInsert = function(nums, target) {
    let l=0
    let r=nums.length-1
    
    if(target<=nums[0]){
        return 0
    }
    if(target>nums[r]){
        return r+1
    }
    if(r===0){
            return 1
    }
    //在nums[l……r]的范围内查找
    while(l<r){
        let mid=Math.floor((r+l)/2)+1
        if(nums[mid]===target){
            return mid
        }
        if(nums[mid]>target){
            r=mid-1
        }else{
            l=mid
        }
    }
    // if(l+1<nums.length&&nums[l+1]===target){
    //     return l+1
    // }
    return r+1
};

console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([1,3,5,6], 0));
console.log(searchInsert([1,3], 2));
console.log(searchInsert([1,4,6,7,8,9], 6));
console.log(searchInsert([1,2,4,6,7], 3));
