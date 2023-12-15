/**
 * @param {number[]} heights
 * @return {number}
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。
 */
//递增栈,存储索引
var largestRectangleArea = function (heights) {
    if (heights.length === 0) {
        return 0
    }
    if (heights.length === 1) {
        return heights[0]
    }
    let maxArea = 0
    let stack = [-1]
    let current = 0
    while (current < heights.length) {

        while (stack.length !== 0 && heights[stack[stack.length - 1]] > heights[current]) {
            let top = stack[stack.length - 1]
            //计算当前弹出元素为高时最大矩形面积
            let distance = current - stack[stack.length - 2] - 1
            let h = heights[top]
            maxArea = Math.max(maxArea, distance * h)
            stack.pop()
        }

        stack.push(current++)
    }
    //当栈没有被清空时，依次弹出并计算以弹出
    let right = stack[stack.length - 1]
    while (stack[stack.length - 1]!== -1) {
        let top = stack[stack.length - 1]
        let distance = right - stack[stack.length - 2] 
        let h = heights[top]
        maxArea = Math.max(maxArea, distance * h)
        stack.pop()
    }
    return maxArea
};
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
console.log(largestRectangleArea([1, 1]));
console.log(largestRectangleArea([5, 4, 1, 2]));
