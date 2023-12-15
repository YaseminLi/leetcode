/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
你可以假设 nums1 和 nums2 不会同时为空。
nums1 = [1, 3]
nums2 = [2]
则中位数是 2.0
链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays
 */
//O(log(m + n))用二分法中的
//数组有序，其中一个
var findMedianSortedArrays = function(nums1, nums2) {
    let len1=nums1.length
    let len2=nums2.length
    //一个为空数组时
    if(len1===0||len2===0){
        let nums=len1===0?lnums2:nums1
        let len=len1===0?len2:len1
        if(len%2===0){
            return (nums[len/2-1]+nums[len/2])/2
        }else{
            return nums[Math.floor(len/2)]
        }
    }
    //计算中位数的位置
    let mid=(len1+len2)
};
let nums1=[1,2,3]
// let nums2=[3]
let nums2=[]
console.log(findMedianSortedArrays(nums1,nums2))