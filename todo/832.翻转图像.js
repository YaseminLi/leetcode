/**
 * @param {number[][]} A
 * @return {number[][]}
 * https://leetcode-cn.com/problems/flipping-an-image/
 */
var flipAndInvertImage = function(A) {
  const itemLength=A[0].length
  for(let i=0;i<A.length;i++){
      const arr=[]
      for(let j=itemLength-1;j>-1;j--){
          arr.push(!A[i][j]?1:0)
      }
      A[i]=arr
  }
  return A
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));
console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]));
console.log(flipAndInvertImage([[1,0,1,0]]));