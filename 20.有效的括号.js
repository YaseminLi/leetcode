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
        ")": "(", "]": "[", "}": "{"
    }
    if (map[s[0]]) {
        return false
    }
    let str = []
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            str.push(s[i])
        } else {
            if ((map[s[i]] === str[str.length - 1])) {
                str.pop()
            } else {
                return false
            }
        }
    }
    return str.length === 0 ? true : false
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


// 将每对括号转化成正负相反的数字
// arr存放暂未匹配的括号
// 每新push一个数字，若为负数且和末尾数字不配对，返回false;
var isValid = function (s) {
    const transToNumber = (s) => {
        let ret = ''
        switch (s) {
            case '(':
                ret = 1
                break;
            case ')':
                ret = -1
                break;
            case '{':
                ret = 2
                break;
            case '}':
                ret = -2
                break;
            case '[':
                ret = 3
                break;
            case ']':
                ret = -3
                break;
            default:
                break
        }
        return ret
    }

    const arr=[transToNumber(s[0])] //存放暂未匹配的括号
    for(let i=1;i<s.length;i+=1){
        const curStr=transToNumber(s[i])
        if(curStr>0){
            arr.push(curStr)
        }else {
            const curTail=arr[arr.length-1]
            if(curStr+curTail===0){
                arr.pop()
            }else {
                return false
            }
        }

    }
    return arr.length===0
};
console.log(isValid(''));//false
console.log(isValid("([)]"));//false
console.log(isValid("{[]}"));//true
console.log(isValid("()[]{}"));//true
console.log(isValid("(){}}{"));//false
