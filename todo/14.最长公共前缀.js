/**
 * @param {string[]} strs
 * @return {string}
 * @example 输入: ["flower","flow","flight"] 输出: "fl" 没有输出零 https://leetcode-cn.com/problems/longest-common-prefix/
 */
//方法四 在三的基础上排除一些特殊情况 76 ms	33.6 MB 
var longestCommonPrefix=function(strs){
    let len=strs.length
    if (len === 0) {
        return ''
    }
    if (len === 1) { return strs[0] }
    let min=strs[0]
    for(let i=0;i<len;i++){
        if(strs[i]===''){
            return ''
        }
        if(min.charAt(0)!==strs[i].charAt(0)){
            return ''
        }
        if(strs[i].length<min.length){
            min=strs[i]
        }
    }
    for(let i=0;i<len;i++){
        if(min===strs[i]){
            continue
        }
        let j=min.length-1
        for(j;j>0;j--){
            if(min[j]!==strs[i][j]){
                min=min.substr(0,j)
            }
        }
    }
    return min
}

//方法三 for循环 84 ms	34.7 MB,相对于方法二内存占用小一点，初始化最大前缀为str=strs[0],从第2个字符串开始，与第一个字符串找最大前缀并更新str，str为‘’时结束 84 ms	34.7 MB
// var longestCommonPrefix = function (strs) {
//     let len=strs.length
//     if (len === 0) {
//         return ''
//     }
//     if (len === 1) { return strs[0] }
//     let str=strs[0]
//     for(let i=0;i<len;i++){
//         let j=0
//         for(j;j<str.length&&j<strs[i].length;j++){
//             if(str[j]!==strs[i][j]){
//                 break
//             }
//         }
//         str=str.substr(0,j)
//         if(str===''){
//             return ''
//         }
//     }
//     return str
// }

//方法二 for循环 84 ms	35.2 MB,遍历每个字符串从0开始的位置上是否都相等
// var longestCommonPrefix = function (strs) {
//     let len=strs.length
//     if (len == 0) {
//         return ''
//     }
//     if (len === 1) { return strs[0] }
//     let str = ''
//     for (let i = 0; i < strs[0].length; i++) {
//         for (let j = 1; j <len; j++) {
//             if (strs[0][i] !== strs[j][i]) {
//                 return str
//             }
//         }
//         str += strs[0][i]
//     }
//     return str
// }

//方法一 用every方法，看数组中每个元素是否等于第一个元素 100 ms	35.2 MB
// var longestCommonPrefix = function(strs) {
//     if(strs.length==0){
//         return ''
//     }
//     let str=''
//     let a=strs[0]
//     for(let i=0;i<a.length;i++){
//         let isSame=strs.every(item=>item[i]===a[i])
//         if(isSame){
//             str+=a[i]
//         }else{
//             break
//         }
//     }
//     return str
// };
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix([]));
