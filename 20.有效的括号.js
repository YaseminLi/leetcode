/**
 * @param {string} s
 * @return {boolean}
 *  '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * https://leetcode-cn.com/problems/valid-parentheses/
 * 
 */

var isValid = function (s) {
    if (s === '') {
        return true
    }
    if (s.length % 2 === 1) {
        return false
    }
    let map = {
        // "(": ")", "[":"]", "{": "}"
        ")": "(", "]":"[", "}": "{"
    }
    if (map[s[0]]) {
        return false
    }
    let str = []
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            str.push(s[i])
        } else {
            if ((map[s[i]] === str[str.length-1])) {
                str.pop()
            } else {
                return false
            }
        }
    }
    return str.length===0?true:false
};

//特殊情况：空字符串true 奇数括号false 右括号开头、左括号结尾 false
// var isValid = function (s) {
//     if (s === '') {
//         return true
//     }
//     if (s.length % 2 === 1) {
//         return false
//     }
//     let map = {
//         "(": -3, "[": -2, "{": -1, "}": 1, "]": 2, ")": 3,
//     }
//     if (map[s[0]] > 0) {
//         return false
//     }
//     let str = []
//     for (let i = 0; i < s.length; i++) {
//         if (map[s[i]] < 0) {
//             str.push(map[s[i]])
//         } else {
//             if ((map[s[i]] + str[str.length-1]) === 0) {
//                 str.pop()
//             } else {
//                 return false
//             }
//         }
//     }
//     return str.length===0?true:false
// };
console.log(isValid(''));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
console.log(isValid("()[]{}"));
