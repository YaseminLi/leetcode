/**
 * @param {number[]} A
 * @return {boolean}
 * 如果数组是单调递增或单调递减的，那么它是单调的。

如果对于所有 i <= j，A[i] <= A[j]，那么数组 A 是单调递增的。 如果对于所有 i <= j，A[i]> = A[j]，那么数组 A 是单调递减的。

当给定的数组 A 是单调数组时返回 true，否则返回 false。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/monotonic-array
 */
var isMonotonic = function(A) {
}; 

console.log(isMonotonic([1,2,2,3]));
console.log(isMonotonic([6,5,4,4]));
console.log(isMonotonic([1,3,2]));
console.log(isMonotonic([1,1,0]));