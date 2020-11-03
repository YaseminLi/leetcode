/**
 * 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。
 * 例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。
你可以按任意顺序返回答案。
输入：["bella","label","roller"]
输出：["e","l","l"]
 * @param {string[]} A
 * @return {string[]}
 */

//方法一：遍历第一项的每个元素，若其他项中都有就放入结果中
var commonChars = function(A) {
  const result=[]
  const len=A.length
  if(len===1){
    return A[1].split('')
  }
  for(let i=0;i<A[0].length;i+=1){
    const targetLetter=A[0][i]
    let allLettersHave=true
    for(let j=1;j<len;j+=1){
        const curLetters=A[j]
        const index=curLetters.indexOf(targetLetter)
        if(index===-1){
          allLettersHave=false
          break
        }else{
         A[j]=A[j].replace(targetLetter,'')
        }
    }
    if(allLettersHave){
      result.push(targetLetter)
    }
  }

 return result
};

console.log(commonChars(["cool","lock","cook"]));