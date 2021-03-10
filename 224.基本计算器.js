/**
 * 由数字、'+'、'-'、'('、')'、和 ' ' 组成
 * 输入：s = "(1+(4+5+2)-3)+(6+8)"
输出：23

输入：s = " 2-1 + 2 "
输出：3

输入：s = "1 + 1"
输出：2
1 <= s.length <= 3 * 105
 * @param {string} s
 * @return {number}
 *
*/
// 通过数组arr来存放需计算的数据，默认都在arr[0]中
// + - 数字识别计算
// s[i]===( 将s[i]与arr[arr.length]计算，并放在arr[arr.length]中
// s[i]===) 将arr[arr.length-1]与前一项计算
 var calculate = function(s) {
   s=s.replace(/\s/g,'')
   let result=0
   const arr=[]
   for(let i=0;i<s.length;i+=1){
     
   }

};