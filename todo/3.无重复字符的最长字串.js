/**
 * @param {string} s
 * @return {number}
 * 输入: "pwwkew" 输出: 3
 * 
 */

// var lengthOfLongestSubstring = function (s) {
//     if (s === '') {
//         return 0
//     }
//     if (s.length === 1) {
//         return 1
//     }
//     let res = 0
//     let temp = [s[0]]
//     for (let i = 1; i < s.length;) {

//         if (temp.indexOf(s[i]) === -1) {
//             temp.push(s[i])
//         } else {

//             temp.shift()
//             continue
//         }
//         res = Math.max(res, temp.length)
//         i++
//     }
//     return res
// }
var lengthOfLongestSubstring = function (s) {
    var max = 0; // 存放 没有重复字符串的最大长度
    var index = 0; //  存放当前没有重复字串的开始索引
    var length = s.length;
    var i = 1; // 当前所在的索引
    var j = index; // 大于等于 index 小于 i,
    if (length === 1) {
        return 1;
    }
    while (i < length) {
        // s[i] 和 s[j] 比较找出重复的字符，如果重复 则 index 指向重复字符的下一个位置， i++ 
        if (s[i] === s[j]) {
            index = j + 1;
            i++;
            j = index;
            max = max > (i - index) ? max : (i - index);
            continue;
        }
        // 如果s[i] 没有和不重复字符串每一项比较完则继续比较，否则 i++重新和不重复字符串比较
        if (j + 1 !== i) {
            j++
        } else {
            i++;
            j = index;
            max = max > (i - index) ? max : (i - index);
        }
    }
    return max;
};




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

/**
 * @param {string} s
 * @return {number}
 */

// 从左到右遍历,用一个变量保存无重复字母的连续字符串
var lengthOfLongestSubstring = function (s) {
    let maxLength = 0 //最大长度

    let curStr = ''//当前无重复字母的连续字符串

    for (let i = 0; i < s.length; i += 1) {
        const index = curStr.indexOf(s[i])
        if (index > -1) {
            maxLength = Math.max(maxLength, curStr.length)
            curStr = curStr.slice(index + 1)

        }
        curStr += s[i]
    }

    return Math.max(maxLength, curStr.length)
};

// 多余字符串的方法，空间复杂度较大，用双指针
var lengthOfLongestSubstring = function (s) {
    if (s.length < 2) return s.length

    let max = 0;//最大长度

    let start = 0;//无重复字符的起始位置
    let i = 1;//当前访问索引
    let j = 0;//判断有无重复字符的起始索引

    while (i < s.length) {
        if (s[i] === s[j]) {
            start = j + 1
            i += 1
            max = Math.max(max, i - start)
            j = start
            continue
        }
        if (j + 1 !== i) {
            j++
        } else {
            i += 1
            j = start
            max = Math.max(max, i - start)
        }
    }
    return max
};

console.log(lengthOfLongestSubstring("anviaj"));//5
console.log(lengthOfLongestSubstring('pwwkew'));//3
console.log(lengthOfLongestSubstring('abcabcbb'));//3
console.log(lengthOfLongestSubstring('bbbbbb'));//1
console.log(lengthOfLongestSubstring('aab'));//2
