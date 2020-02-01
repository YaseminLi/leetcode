/*
easy
给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

说明:

返回的下标值（index1 和 index2）不是从零开始的。
你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
示例:

输入: numbers = [2, 7, 11, 15], target = 9
输出: [1,2]
解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
链接：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted
 */


//双层循环
//1.外层循环固定第一个值first，从头部开始
//2.内层循环查找第二个值second,从尾部开始。因为是有序数组，当比较的值小于second时，结束这层循环
//3.返回索引（注意从1开始）
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const len=numbers.length
    let result=null
    for(let i=0;i<len;i++){
        const first=numbers[i]
        const second=target-first
        for(let j=len-1;j>i;j--){
            if(numbers[j]===second){
                return result=[i+1,j+1]
            }else if(numbers[j]<second){
                break
            }
        }
    }
    return result
};
const numbers=[2,7,9,18,20,20,36,48,50]
const target=22
console.log(twoSum(numbers,target))