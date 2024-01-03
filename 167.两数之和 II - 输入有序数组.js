/**
 * easy 链接：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 * 说明:返回的下标值（index1 和 index2）不是从零开始的。你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
 * 
 * 输入: numbers = [2, 7, 11, 15], target = 9
 * 输出: [1,2]
 * 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 */

/**
 * 双指针
 * 1.第一个指针从头部开始，第二个指针从尾部开始
 * 2.两个指针指向的sum与target比较，sum<target 移动第一个指针，相反就移动第二个指针
 * 组中的元素最多遍历一次，时间复杂度为 O(N)。只使用了两个额外变量，空间复杂度为 O(1)。
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    const len = numbers.length
    if (len < 2) {
        return null
    }
    let result = null
    let l = 0
    let r = len - 1
    while (l < r) {
        let sum = numbers[l] + numbers[r]
        if (sum < target) {
            l++
        } else if (sum > target) {
            r--
        } else {
            result = [l + 1, r + 1]
            break
        }
    }
    return result
};

console.log(twoSum([2, 7, 9, 18, 20, 20, 36, 48, 50], 22))