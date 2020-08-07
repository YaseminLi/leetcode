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


// 用map存储回文数据：遍历words每一项，将翻转存入key,索引i为value
// 将每个单词拆分成左右两部分，寻找其中的回文串，看在map中是否存在
var palindromePairs = function (words) {
    //用map存字符串的翻转
    const map = new Map()
    // 用Set存回文对的索引，以避免重复
    const set = new Set()
    words.forEach((word, i) => map.set(word.split('').reverse().join(''), i))
    for (let i = 0; i < words.length; i++) {
        // 单词为空的情况
        for (let j = 0; j <= words[i].length; j++) {
            //  将单词拆分成左右两部分
            const l = words[i].slice(0, j)
            const r = words[i].slice(j)

            //左边是回文串时,找右半部分是否存在于map中
            if (isPalindrome(l) && map.has(r) && map.get(r) !== i) {
                // set.add([map.get(r), i]) add数组无法检查到重复情况，转换成字符串
                const temp = `${map.get(r)},${i}`
                set.add(temp)
            }

            //右边是回文串时,左半部分是否存在于map中
            if (isPalindrome(r) && map.has(l) && map.get(l) !== i) {
                const temp = `${i},${map.get(l)}` //不要搞反了顺序啊
                set.add(temp)
            }
        }
    }
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

    return [...set].map(item => item.split(','))
} // 268ms 49.1M 超快了！！

const cases = [
    {
        data: ["a", ''],
        expect: [
            [0, 1],
            [1, 0],
        ],
    },
    {
        data: ["abcd", "dcba", "lls", "s", "sssll"],
        expect: [
            [0, 1],
            [1, 0],
            [3, 2],
            [2, 4]
        ],
    },
    {
        data: ["bat", "tab", "cat"],
        expect: [
            [0, 1],
            [1, 0]
        ],
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