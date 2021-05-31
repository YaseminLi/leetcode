/**
 * 给定一个整数，写一个函数来判断它是否是 4 的幂次方。如果是，返回 true ；否则，返回 false 。

整数 n 是 4 的幂次方需满足：存在整数 x 使得 n == 4x

 

示例 1：

输入：n = 16
输出：true
示例 2：

输入：n = 5
输出：false
示例 3：

输入：n = 1
输出：true

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/power-of-four
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number} n
 * @return {boolean}
 */
 //Math.log2() 为2的对数
 var isPowerOfFour = function(n) {
    const temp=Math.log2(n)
    if(parseInt(temp)===temp&&parseInt(temp/2)===temp/2) return true
    return false
};
console.log(isPowerOfFour(16));
console.log(isPowerOfFour(5));
console.log(isPowerOfFour(1));
console.log(isPowerOfFour(0.5));
console.log(isPowerOfFour(0.25));