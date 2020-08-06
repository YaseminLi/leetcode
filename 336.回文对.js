/**
 * 给定一组唯一的单词， 找出所有不同 的索引对(i, j)，使得列表中的两个单词， words[i] + words[j] ，可拼接成回文串。
输入: ["abcd","dcba","lls","s","sssll"]
输出: [[0,1],[1,0],[3,2],[2,4]] 
解释: 可拼接成的回文串为 ["dcbaabcd","abcddcba","slls","llssssll"]
链接：https://leetcode-cn.com/problems/palindrome-pairs
 * @param {string[]} words
 * @return {number[][]}
 */

// 判断回文对

// 1.暴力循环 每一对组合起来，判断是否回文对；第一层循环为回文对的第一项，第二层循环为找第二项也是从第一项后面一个开始遍历，每对有两种组合，判断回文
var palindromePairs = function (words) {
    if (!words || words.length < 2) {
        return []
    }
    const results = [] //存储所有的回文对

    // 判断是否是回文字符串
    function isPalindrome (string) {
        const len = string.length
        for (let i = 0, j = len - 1; i < j; i++, j--) {
            if (string[i] !== string[j]) {
                return false
            }
        }
        return true
    }
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            // i在左，j在右
            if (isPalindrome(words[i] + words[j])) {
                results.push([i, j])
            }
            // i在右，j在左
            if (isPalindrome(words[j] + words[i])) {
                results.push([j, i])
            }
        }
    }
    return results
}; // 3796ms 50.2M


var palindromePairs = function (words) {
    // 用Map存每个字符串的翻转
    const map = new Map()
    // 用Set存回文对的索引，以避免重复
    const set = new Set()
    // map的key为字符串的翻转，value为字符串的索引
    words.forEach((word, i) => {
        map.set(word.split('').reverse().join(''), i)
    })
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        for (let j = 0; j <= word.length; j++) {
            // 将字符串分为左右两个字串
            const left = word.slice(0, j), right = word.slice(j)
            // 如果左字符串是回文的
            if (isPalindrom(left)) {
                // 如果map里存有右字符串且索引不是i（题目写着要不同的索引对）
                if (map.has(right) && map.get(right) !== i) {
                    // 满足前面条件的字符串为  右字符串的翻转 + 本身是回文的左字符串 + 右字符串
                    // 这是一个回文字符串，其索引对为[map.get(right),i]
                    // 因为数组没办法去重，所以用字符串表示并存入set
                    const temp = `${map.get(right)},${i}`
                    set.add(temp)
                }
            }
            // 如果右字符串是回文的
            if (isPalindrom(right)) {
                // 如果map里存有左字符串且索引不是i（题目写着要不同的索引对） 
                if (map.has(left) && map.get(left) !== i) {
                    // 满足前面条件的字符串为  左字符串 + 本身是回文的右字符串 + 左字符串的翻转
                    const temp = `${i},${map.get(left)}`
                    set.add(temp)
                }
            }
        }
    }
    // 将set中表示索引对的字符串转化为数组存到ans里
    const ans = [...set].map(v => v.split(','))
    return ans
}
// 判断是否是回文字符串
function isPalindrom (str) {
    let i = 0, j = str.length - 1
    while (i < j) {
        if (str[i] !== str[j]) {
            return false
        }
        i++
        j--
    }
    return true
}

// var palindromePairs=function(words){

// }

const cases = [
    {
        data: ["abcd", "dcba", "lls", "s", "sssll"],
        expect: [[0, 1], [1, 0], [3, 2], [2, 4]],
    },
    {
        data: ["bat", "tab", "cat"],
        expect: [[0, 1], [1, 0]],
    },
];
function unitTest () {
    for (let ca of cases) {
        try {
            let result = palindromePairs(ca.data);
            console.log(result);
            if (result !== ca.expect) {
                console.log("not pass:", ca, result);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

unitTest();