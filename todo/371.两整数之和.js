/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 * 不使用运算符 + 和 - ​​​​​​​，计算两整数 ​​​​​​​a 、b ​​​​​​​之和。
 */

//用for循环和数组
var getSum = function (a, b) {
    let arr = null
    let a1 = Math.abs(a)
    let b1 = Math.abs(b)
    let minAbs = a1 > b1 ? b1 : a1
    let maxAbs = a1 > b1 ? a1 : b1
    let maxArr = Array(maxAbs)
    let minArr = Array(minAbs)
    let c = '+'
    if (a >= 0 && b >= 0 || a < 0 && b < 0) {
        arr = maxArr.concat(minArr)
        if (a < 0) {
            c = '-'
        }
    } else {
        maxArr.splice(-minAbs, minAbs)
        arr = maxArr
        if ((a1 > b1 && a < 0) || (a1 < b1 && b < 0)) {
            c = '-'
        }
    }
    return Number([c, arr.length].join(''))
};
console.log(getSum(-3, 2));
console.log(getSum(-3, 4));
console.log(getSum(-3, -2));
console.log(getSum(3, 2));
console.log(getSum(0, 2));
console.log(getSum(0, -2));
