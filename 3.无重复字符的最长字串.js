/**
 * @param {string} s
 * @return {number}
 * 输入: "pwwkew" 输出: 3
 * 
 */

var lengthOfLongestSubstring = function (s) {
    if (s === '') {
        return 0
    }
    if (s.length === 1) {
        return 1
    }
    let res = 0
    let temp = [s[0]]
    for (let i = 1; i < s.length;) {

        if (temp.indexOf(s[i]) === -1) {
            temp.push(s[i])
        } else {

            temp.shift()
            continue
        }
        res = Math.max(res, temp.length)
        i++
    }
    return res
}
console.log(lengthOfLongestSubstring("anviaj"));

//超时了……
//1.排除特殊情况空字符串和单个字符
//2.两层循环
// var lengthOfLongestSubstring = function (s) {
//     if (s === '') {
//         return 0
//     }
//     if (s.length === 1) {
//         return 1
//     }
//     let max = ''
//     for (let j = 0; j < s.length; j++) {
//         if ((s.length - j) < max.length) {
//             return max.length
//         }
//         let str = s[j]
//         for (let i = j + 1; i < s.length; i++) {
//             if (str.indexOf(s[i]) === -1) {
//                 str += s[i]
//             } else {
//                 if (max.length < str.length) {
//                     max = str
//                 }
//                 str = s[i]
//                 if ((s.length - i) < max.length) {
//                    break
//                 }
//             }
//         }
//         if (max.length < str.length) {
//             max = str
//         }
//     }

//     return max.length
// };

// console.log(lengthOfLongestSubstring('pwwkew'));
// console.log(lengthOfLongestSubstring('abcabcbb'));
// console.log(lengthOfLongestSubstring('bbbbbb'));
