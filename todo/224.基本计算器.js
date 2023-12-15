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
 var calculate = function(s) {
   let ret=0
   const len=s.length
   let sign=1
   for(let i=0;i<len;i++){
     if(!s[i]){
       continue
     }else if(s[i]==='+'){
       sign=1
     }else if(s[i]==='-'){
      sign=-1
    }else if(!isNaN(Number(s[i]))){
       let sum=0
       while(i<len){
        sum=sum*10+Number(s[i])
        i++
       }
       ret+=sum
     }
   }

};