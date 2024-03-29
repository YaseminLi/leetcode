/**
 * @param {string} str
 * @return {number}
 * 请你来实现一个 atoi 函数，使其能将字符串转换成整数。
首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。
当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。
该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。
注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。
在任何情况下，若函数不能进行有效的转换时，请返回 0。
说明：
假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−231,  231 − 1]。如果数值超过这个范围，请返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。
链接：https://leetcode-cn.com/problems/string-to-integer-atoi
 */
//方法一：遍历字符串的每一项
//方法二；正则匹配



var myAtoi = function (str) {
    str=str.trim()
    if (str === '') {
        return 0
    }
    let number = ''
    for (let i = 0; i < str.length; i++) {
        if(number.length===0){
            //trim()方法可以去头去尾
            // if (str[i] === ' ') {
            //     continue
            // }
            if (str[i] === '-') {
                number='-'
                continue
            }
            if (str[i] === '+') {
                number='+'
                continue
            }
        }
        if (!isNaN(str[i])&&str[i]!==' ') {
            number += str[i]
        } else {
            break
        }
    }
    if (number.length === 0||number==='-'||number==='+') {
        return 0
    } else {
        number =Number(number)
    }
    if (number > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1
    }
    if (number < (-Math.pow(2, 31))) {
        return -Math.pow(2, 31)
    }
    return number
};

//方法二:正则匹配,没有遍历每个字符的效率高
// var myAtoi = function (str) {
//     let number = str.trim().match(/^(-|\+)?\d+/g)
//     number = number ? Number(number) : 0
//     if (number > Math.pow(2, 31) - 1) {
//         return Math.pow(2, 31) - 1
//     }
//     if (number < (-Math.pow(2, 31))) {
//         return -Math.pow(2, 31)
//     }
//     return number
// }
console.log(myAtoi('42'));
console.log(myAtoi('-42'));
console.log(myAtoi('+42'));
console.log(myAtoi('    -42dhud'));
console.log(myAtoi('    +f42'));
console.log(myAtoi('    -42'));
console.log(myAtoi('+0 123'));
