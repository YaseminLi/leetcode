/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

示例 1：

输入：grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
输出：1
示例 2：

输入：grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
输出：3

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-islands
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {character[][]} grid
 * @return {number}
 */

// res为岛屿数量
// 遍历grid中每个元素
// 如果grid[i][j]===1，res+=1 ,并且递归访问其上下左右格子，为1的话赋值为0
var numIslands = function(grid) {
  const row=grid.length
  const col=grid[0].length
  let res=0

  const helper=(i,j)=>{
    if(i<0||j<0||i+1>row||j+1>col||grid[i][j]==='0') return

    grid[i][j]='0'

    helper(i,j-1)
    helper(i+1,j)
    helper(i,j+1)
    helper(i-1,j)
  }

  for(let i=0;i<row;i+=1){
    for(let j=0;j<col;j+=1){
      if(grid[i][j]==='1'){
        res+=1
        helper(i,j)
      }
    }
  }

  return res
};

console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]));//1

console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]));//3

console.log(numIslands([['1']]));
console.log(numIslands([['0']]));//0