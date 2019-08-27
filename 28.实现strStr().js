/**在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
输入: haystack = "hello", needle = "ll"
输出: 2
链接：https://leetcode-cn.com/problems/implement-strstr
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

//substring  OK
var strStr = function (haystack, needle) {
    if (needle === '') {
        return 0
    }
    let maxIndex = haystack.length - needle.length
    //找首字母
    for (let i = 0; i <= maxIndex; i++) {
        if (haystack[i] === needle[0]) {
            if (haystack.substring(i, i + needle.length) === needle) return i;
        }
    }
    return -1
}


//两层for循环
// var strStr = function (haystack, needle) {
//     if (needle === '') {
//         return 0
//     }
//     let maxIndex = haystack.length - needle.length
//     //找首字母
//     for (let i = 0; i <= maxIndex; i++) {
//         if (haystack[i] === needle[0]) {
//             for (let j = 0;j < needle.length;j++) {
//                 if (haystack[i+j] !== needle[j]) {
//                     break
//                 }
//                 if (j ===needle.length - 1) {
//                     return i
//                 }
//             }
//         }
//     }
//     return -1
// }
console.log(strStr('hello', 'll'));
console.log(strStr('hello', 'ol'));
console.log(strStr('', ''));
console.log(strStr("mississippi", "issip"));
console.log(strStr("aaa", "a"));
// var strStr = function (haystack, needle) {
//     if (needle === '') {
//         return 0
//     }
//     let maxIndex = haystack.length - needle.length
//     //找首字母
//     for (let i = 0; i <= maxIndex; i++) {
//         if (haystack[i] === needle[0]) {
//             for (let k=i, j = 0; k <= maxIndex, j < needle.length; k++ , j++) {
//                 if (haystack[k] !== needle[j]) {
//                     break
//                 }
//                 if (j ===needle.length - 1) {
//                     return i
//                 }
//             }
//         }
//     }
//     return -1
// }


// var strStr = function (haystack, needle) {
//     if (needle == '') {
//         return 0
//     }
//     let hLen = haystack.length
//     let nLen = needle.length
//     let start = haystack.indexOf(needle[0])
//     if (start === -1) {
//         return start
//     }
//     for (start; start <= (hLen - nLen);start = haystack.indexOf(needle[0], start + 1)) {
//         let hasEnd = haystack[start + nLen - 1] === needle[nLen - 1]
//         if (hasEnd) {
//             for (let i = start + 1, j = 1; j < nLen; j++) {
//                 if (haystack[i] !== needle[j]) {
//                     start = -1
//                     break
//                 }
//                 if(j===nLen-1){
//                     return start
//                 }
//             }
//         } 
//     }
//     return start
// };


// var strStr = function (haystack, needle) {
//     if (needle == '') {
//         return 0
//     }
//     let hLen = haystack.length
//     let nLen = needle.length
//     let start = haystack.indexOf(needle[0])
//     if ((start > -1) && start <= (hLen - nLen)) {
//         for (let i = start + 1, j = 1; j < needle.length; i++ , j++) {
//             if (haystack[i] !== needle[j]) {
//                 // start = -1
//                 //  break
//                 i = haystack.indexOf(needle[0], start + 1)
//                 if (i > -1) {
//                     j = 0
//                     start = i
//                 } else {
//                     start = -1
//                 }
//             }
//         }
//     } else {
//         start = -1
//     }
//     return start
// };


// var strStr = function (haystack, needle) {
//     if(needle==''){
//         return 0
//     }
//     let hLen = haystack.length
//     let nLen = needle.length
//     let start = haystack.indexOf(needle[0])
//     if ((start > -1) && start <= (hLen - nLen)) {
//         for (let i = start + 1, j = 1; j < needle.length; i++ , j++) {
//             if (haystack[i] !== needle[j]) {
//                 start = -1
//                 break
//             }
//         }
//     } else {
//         start = -1
//     }
//     return start
// };

