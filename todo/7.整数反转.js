/**
 * @param {number} x
 * @return {number}
 * @example
 *      给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
        输入: 123 输出: 321
        输入: -123 输出: -321
        输入: 120 输出: 21
        假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
        链接：https://leetcode-cn.com/problems/reverse-integer
 */
//方法三： array.reverse 112 ms	35.8 MB 最慢
// var reverse = function (x) {
//     let arr = Math.abs(x).toString().split('').reverse()
//     let numReverse = x > 0 ? arr.join('') - 0 : 0 - arr.join('')
//     let max = Math.pow(2, 31)
//     if (numReverse < (-max) || numReverse > (max + 1)) {
//         return 0
//     }
//     return numReverse
// };

//方法二：开始和末尾调换位置，从两头一起向中间遍历 84ms 35.8mb 最快
var reverse = function (x) {
    //数字转换成字符串用+‘’比toString()快
    let arr = (Math.abs(x)+'').split('')
    let average = Math.floor(arr.length / 2)
    for (let i = 0, j = arr.length - 1; i < average; i++ , j--) {
        //if (arr[i] === arr[j]) { continue }加上比大小会更慢
        let m = arr[i]
        arr[i] = arr[j]
        arr[j] = m
    }
    let numReverse = x > 0 ? arr.join('') - 0 : 0 - arr.join('')
    let max = Math.pow(2, 31)
    if (numReverse < (-max) || numReverse > (max + 1)) {
        return 0
    }
    return numReverse
};


//方法一：for循环 从尾部往前一次取 112ms 36mb
// var reverse = function (x) {
//     let arr = Math.abs(x).toString().split('')
//     let arrReverse = []
//     for (let i = 0; i < arr.length; i++) {
//         arrReverse[i] = arr[arr.length - 1 - i]
//     }
//    let numReverse=x>0?arrReverse.join('')-0:0-arrReverse.join('')
//    let max=Math.pow(2,31)
//    if(numReverse<(-max) || numReverse>(max+1)){
//        return 0
//    }
//    return numReverse
// };


var reverse = function(x) {
    const arr=(Math.abs(x)+'').split('')
    const middle=Math.floor(arr.length/2)
    for(let i=0,j=arr.length-1;i<middle;i+=1,j-=1){
        const m=arr[i]
        arr[i]=arr[j]
        arr[j]=m
    }
    let ret=arr.join('')-0
    
    if(x<0){
        ret=0-ret
        
    }
let max = Math.pow(2, 31)
    if (ret < (-max) || ret > (max + 1)) {
        return 0
    }
    return ret

};
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(123));
console.log(reverse(900000));
