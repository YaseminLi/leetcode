/**
 * @param {number[]} height
 * @return {number}
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 示例:
输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6
 */
//思路 
//方法一：超时了……
//从底层向上看，遇到0并且左右有大于0的数字时，一个0代表1个雨水
//一层结束后，再计算向上的一层，数组中每个数字都减1，是0则不减
// var trap = function (height) {
//     if (height.length < 3) {
//         return 0
//     }
//     //雨水的储存量
//     let sum = 0
//     remove0(height)
//     //从底层开始向上遍历，i为第几层
//     while (height.length > 2) {
//         //计算每层可以储存的雨水量
//         for (let j = 0; j < height.length; j++) {
//             if (height[j] === 0) {
//                 sum += 1
//             } else {
//                 height[j]--
//             }
//         }
//         remove0(height)
//     }
//     //去掉数组头尾的0
//     function remove0(height) {
//         while (height[0] === 0) {
//             height.shift()
//         }
//         while (height[height.length - 1] === 0) {
//             height.pop()
//         }
//     }
//     return sum
// };
//方法二：
//创建一个递减栈，存储height中元素的索引
var trap = function (height) {
    if (height.length < 3) {
        return 0
    }
    //存储雨水数量
    let sum = 0
    let stack = [0]
    //当前判断的索引，是否要放入栈
    let current = 1
    while (current < height.length) {
        while (stack.length > 0 && height[stack[stack.length - 1]] < height[current]) {
            //弹出栈顶，为索引
            let pop = stack.pop()
            //弹出比当前元素小的栈顶后新的栈顶
            if (stack.length === 0) {
                break
            }
            let top = stack[stack.length - 1]

            let distance = current - top - 1
            let h = Math.min(height[current], height[top]) - height[pop]
            sum += distance * h
        }
        stack.push(current++)
    }
    return sum
}
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
