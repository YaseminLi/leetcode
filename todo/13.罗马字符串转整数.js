/**
 * @param {string} s
 * @return {number}
 * @example 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。链接：https://leetcode-cn.com/problems/roman-to-integer
 */
//方法二 替换字符串 内存大，效率慢 240ms 41.9MB
var romanToInt = function (s) {
    let obj = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000, 'a': 4, 'b': 9, 'c': 40, 'd': 90, 'e': 400, 'f': 900
    }
    s = s.replace(/IV/g, 'a')
    s = s.replace(/IX/g, 'b')
    s = s.replace(/XL/g, 'c')
    s = s.replace(/XC/g, 'd')
    s = s.replace(/CD/g, 'e')
    s = s.replace(/CM/g, 'f')
    let arr = s.split('')
    let int = 0
    arr.forEach(item => int += obj[item])
    return int
}

//方法一 比较快 236ms 40.7MB
// var romanToInt = function (s) {
//     let obj = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     }
//     let arr = s.split('')
//     let int = 0
//     for (let i = arr.length - 1; i >= 0; i--) {
//         let r = arr[i]
//         let l = arr[i - 1]
//         if (i === 0) {
//             int += obj[r]
//             break
//         }
//         if (obj[r] > obj[l]) {
//             int += (r === 'V' || r === 'L' || r === 'D') ? obj[r] * 0.8 : obj[r] * 0.9
//             i--
//         } else {
//             int += obj[r]
//         }
//     }
//     return int
// };

//方法三 最快 占用内存最小 228ms 40.2MB 对方法二进行了优化：1.字符串可以直接用for循环遍历 2.obj[r] > obj[l]加减数值的变化
//1.建立键值对集合 罗马字符-数字
//2.遍历罗马字符串，数值相加，其中要判断当前字符是否小于下一个字符，小的话执行减法
var romanToInt = function (s) {
    let obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let int =0
    for (let i = 0; i < s.length; i++) {
        let l = s[i]
        let r = s[i + 1]
        if (obj[l] <obj[r]) {
            int +=obj[r]-obj[l]
            i++
        } else {
            int += obj[l]
        }
    }
    return int
};
console.log(romanToInt('III'));
console.log(romanToInt("LVIII"));
console.log(romanToInt('IX'));
console.log(romanToInt("MCMXCIV"));
