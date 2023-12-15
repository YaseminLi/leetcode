/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
  const matrixLen=matrix.length
  const itemLen=matrix[0].length
  const result=[]

  for(let i=0;i<matrixLen;i++){
    for(let j=0;j<itemLen;j++){
        if(!result[j])result[j]=[]
        result[j][i]=matrix[i][j]
    }
  }
  return result
};

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));
console.log(transpose([[1,2,3],[4,5,6]]));