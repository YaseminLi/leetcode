/**
 * @param {string} s
 * @return {number}
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。s = "loveleetcode",返回 2.
 */

 //方法：96ms，27.5M
 //使用for循环，当前查找元素为s[i]
 //判断s[i]是否出现过，出现过就跳过当前循环，判断s[i+1]
 //若s[i]在i之前没有出现过，看i+1后还有没有s[i]
 //有的话说明当前s[i]虽然首次出现但不是唯一的，继续判断s[i+1]
 //没有的话说明s[i]首次出现并且唯一返回i的值
var firstUniqChar = function(s) {
    if(s===null||s===''){
        return -1
    }
    for(let i=0;i<s.length;i++){
        // let isFirst=s.slice(0,i).indexOf(s[i])
        // if(isFirst>-1){
        //     continue
        // }
        //上面用slice方法copy i前面的数组来查询s[i]是否出现过，增大了内存，其实可以查询s[i],若出现位置小于i，可以跳过本层循环
        let firstIndex=s.indexOf(s[i])
        if(firstIndex<i){
            continue
        }
        let index=s.indexOf(s[i],i+1)
        if(index===-1){
            return i
        }
    }
    return -1
};
// console.log(firstUniqChar('loveleetcode'));
// console.log(firstUniqChar('aaaaaaaa'));
// console.log(firstUniqChar('abcdef'));
console.log(firstUniqChar("aadadaad"));
