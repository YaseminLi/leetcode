/**
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49 
 * @param {number[]} height
 * @return {number}
 */
/**
 * 双指针碰撞
 * 计算指针此时的水容量做记录，
 * 移动较小一端的指针，更新水容量
 */
var maxArea = function (height) {
  let area = 0; //存储当前最大水量
  let i = 0;
  j = height.length - 1
  while (i < j) {
    area = Math.max(Math.min(height[i], height[j]) * (j - i), area)
    if (Math.min(height[i], height[j]) === height[i]) {
      i++
    } else if (Math.min(height[i], height[j]) === height[j]) {
      j--
    }
  }
  return area
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));