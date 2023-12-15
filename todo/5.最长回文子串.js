/**
 * @param {string} s
 * @return {string}
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
链接：https://leetcode-cn.com/problems/longest-palindromic-substring
 */
//遍历字符串，找出以当前位置为中心的回文子串
var longestPalindrome = function (s) {
    let len = s.length
    if (len === 0 || len === 1) {
        return s
    }
    let longest = s[0] //存储最长的回文子串
    //遍历字符串，找出以当前位置为中心的回文子串
    for (let i = 0; i < len - 1; i++) {
        let str = '' //存储当前位置的回文子串
        let l = i - 1
        let r = i + 1
        if (s[i] === s[i + 1]) {
            let j = i + 2
            for (j; j < len; j++) {
                if (s[j] !== s[i]) {
                    break
                }
            }
            r = j
        }

        for (l, r; l >= 0 && r < len; l-- , r++) {
            if (s[l] === s[r]) {
                continue
            } else {
                break
            }
        }
        str = s.substring(l + 1, r)
        longest = str.length > longest.length ? str : longest
    }
    return longest
};
// console.log(longestPalindrome('babad'));
// console.log(longestPalindrome('cbba'));
// console.log(longestPalindrome('aeffdcebfaaf'));
// console.log(longestPalindrome('ccc'));


/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
     if(s.length===1)return s
     let longestStr=''
    for(let i=0.5;i<s.length;i+=0.5){
        let curStr=''
        let left='',right=''
        if(i>Math.floor(i)){
            //以空隙为对称点
            left=i-0.5
            right=i+0.5
        }else{
            // 以i为对称点
            curStr=s[i]
            left=i-1
            right=i+1
        }

        while(left>=0&&right<s.length){
            if(s[left]===s[right]){
                curStr=s[left]+curStr+s[right]
                left--
                right++
            }else {
                break
            }
        }
        longestStr=longestStr.length<curStr.length?curStr:longestStr
    }
    return longestStr
};


console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbba'));
console.log(longestPalindrome('aeffdcebfaaf'));
console.log(longestPalindrome('ccc'));
console.log(longestPalindrome('a'));
