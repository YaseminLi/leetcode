/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 * 已有方法 rand7 可生成 1 到 7 范围内的均匀随机整数，试写一个方法 rand10 生成 1 到 10 范围内的均匀随机整数。

不要使用系统的 Math.random() 方法。
链接：https://leetcode-cn.com/problems/implement-rand10-using-rand7
示例 
输入: 3
输出: [8,1,10]
 */
//将【1-7】*10/7为【1+3/7,2+6/7,4+2/7,5+5/7,7+1/7,8+4/7,10】
//每一项中，当加的分数大于0.5时，floor和ceil可以随机取，小于0.5时，只能取floor，所以可以取值的范围为【1-10】
function rand7() {
    let a = Math.random() * 7
    a = Math.floor(a) + 1
    return a
}

var rand10 = function () {
    let a = rand7()
    //如果为1-3则对应10中的1-5，为5-7对应10中的6-10，为4则继续循环
    //如果取到1-5 直接返回,6-7继续循环
    while(a===4){
        a=rand7()
    }
    let b=a>4?5:0;
    let c=rand7()
    while(c>5){
        c=rand7()
    }
    return b+c
}
//不是均匀随机整数
// var rand10 = function (n) {
//     let nums = []
//     while (n) {
//         let a = rand7()
//         let m = a * 10 / 7
//         let floor = Math.floor(m)
//         if (m - floor > 0.5 && a > 4) {
//             m = floor+1
//         } else { m = floor }
//         nums.push(m)
//         n--
//     }
//     return nums
// };

console.log(rand10(1));
console.log(rand10(2));
console.log(rand10(3));
console.log(rand10(10));


