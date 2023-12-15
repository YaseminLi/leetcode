/*
 * @lc app=leetcode.cn id=2678 lang=javascript
 *
 * [2678] 老人的数目
 * 给你一个下标从 0 开始的字符串 details 。details 中每个元素都是一位乘客的信息，信息用长度为 15 的字符串表示，表示方式如下：

前十个字符是乘客的手机号码。
接下来的一个字符是乘客的性别。
接下来两个字符是乘客的年龄。
最后两个字符是乘客的座位号。
请你返回乘客中年龄 严格大于 60 岁 的人数。
 */

// @lc code=start
/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
  let count=0
  details?.forEach(item=>{
    const age=item.slice(11,13)
    if(age>60){
      count+=1
    }

  })
return count
};
// @lc code=end
console.log(countSeniors(["7868190130M7522","5303914400F9211","9273338290F4010"]));//2
console.log(countSeniors(["1313579440F2036","2921522980M5644"]));//0

