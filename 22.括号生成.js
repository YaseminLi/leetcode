/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/generate-parentheses
 * @param {number} n
 * @return {string[]}
 */

// 只能按照一定顺序？？
// 递归方法
// 在上一层计算的结果如：n上进行增加括号
// 两种： 1.相邻的括号对(),1个（）（）（）  （n-1）*2 个左右两边
// 2. 最外层的括号对（） 共N个
var generateParenthesis = function (n) {
  const generate = (number) => {
    if (number === 1) return ['()']

    const lastRet = generate(number - 1)
    const ret = []
    for (let i = 0; i < lastRet.length; i += 1) {
      const cur = lastRet[i]
      if (i === 0) {
        ret.push(cur + '()')
      } else {
        ret.push(cur + '()')
        ret.push('()' + cur)
      }
      ret.push('(' + cur + ')')
    }
    return ret
  }
  return generate(n)
};

// 回溯
// lRemain 为剩下的左括号，rRemain为剩下的右括号
//只有右括号数大于左括号时才可以选右括号
var generateParenthesis = n => {
  const ret = []
  const dfs = (lRemain, rRemain, str) => {
    if (str.length === 2 * n) {
      ret.push(str)
      return
    }
    if(lRemain>0){
      dfs(lRemain-1,rRemain,str+'(')
    }
    if(lRemain<rRemain){
      dfs(lRemain,rRemain-1,str+')')
    }
  }
  dfs(n, n, '')
  return ret
}

console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
console.log(generateParenthesis(4));
