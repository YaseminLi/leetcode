/**
 * 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
重复出现的子串要计算它们出现的次数。
链接：https://leetcode-cn.com/problems/count-binary-substrings
输入: "00110011"
输出: 6
解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。
 * @param {string} s
 * @return {number}
 */

// 一层遍历过去，计算左右两部分相同字符的数量，当右边字符小于等于左边时，计算count
var countBinarySubstrings = function (s) {
    let count = 0
    let leftCount = 1
    let rightCount = 0
    let isLeft = 1 // 当前处在待判断字符串的左半边还是右半边
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            if (isLeft) {
                leftCount++
            } else {
                rightCount++
            }
        } else {
            if (rightCount) {
                leftCount = rightCount
                rightCount = 0
            }
            isLeft = 0
            rightCount++
        }
        // 聚焦在右半部分时，需要判断count
        if (!isLeft) {
            if (rightCount <= leftCount) {
                count++
                if (leftCount === rightCount) {
                    rightCount = 0
                    isLeft = 1
                }
            }
        }
    }
    return count
}; //104ms 39.8M

// 00110011 可以得到[2,2,2,2]数组，代表连续相同字符的长度，取相邻两个count的min值相加即可
var countBinarySubstrings = function (s) {
    let ans = 0, ptr = 0, last = 0
    const n = s.length
    while (ptr < n) {
        let count = 0
        const c = s.charAt(ptr)
        while (ptr < n && s.charAt(ptr) === c) {
            ptr++
            count++
        }
        ans += Math.min(count, last)
        last = count
    }
    return ans
} //120ms 39.6mb

const cases = [
    {
        data: "00100",
        expect: 2,
    },
    {
        data: "00110011",
        expect: 6,
    },
    {
        data: "10101",
        expect: 4,
    },
    {
        data: "10",
        expect: 1,
    },
    {
        data: "111000",
        expect: 3,
    }
];

function unitTest () {
    for (let ca of cases) {
        try {
            let result = countBinarySubstrings(ca.data);
            if (result !== ca.expect) {
                console.log("not pass:", ca, result);
            }
        } catch (error) {
            console.log(error);
        }
    }
}
 
unitTest();