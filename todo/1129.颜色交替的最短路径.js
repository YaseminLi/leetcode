/*
 * @lc app=leetcode.cn id=1129 lang=javascript
 *
 * [1129] 颜色交替的最短路径
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
// blueReversePathObj 指向该节点的蓝色路径节点
// redReversePathObj 指向该节点的红色路径节点
//  shortestPaths 从0到该节点的红蓝交替的最短路径

// 从n-1节点向0计算
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  const next = new Array(2)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array()));
  // console.log("---------- ~ shortestAlternatingPaths ~ next", next);
  for (const edge of redEdges) {
    next[0][edge[0]].push(edge[1]);
  }
  for (const edge of blueEdges) {
    next[1][edge[0]].push(edge[1]);
  }
  // console.log("---------- ~ shortestAlternatingPaths ~ next", next);
  const dist = new Array(2)
    .fill(0)
    .map(() => new Array(n).fill(Number.MAX_VALUE)); // 两种类型的颜色最短路径的长度
  const queue = [];
  dist[0][0] = 0;
  dist[1][0] = 0;
  queue.push([0, 0]);
  queue.push([0, 1]);
  while (queue.length) {
    const pair = queue.shift();
    let x = pair[0],
      t = pair[1];
    for (const y of next[1 - t][x]) {
      if (dist[1 - t][y] !== Number.MAX_VALUE) {
        continue;
      }
      dist[1 - t][y] = dist[t][x] + 1;
      queue.push([y, 1 - t]);
    }
  }
  const answer = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    answer[i] = Math.min(dist[0][i], dist[1][i]);
    if (answer[i] === Number.MAX_VALUE) {
      answer[i] = -1;
    }
  }
  return answer;
};
// @lc code=end
console.log(
  shortestAlternatingPaths(
    3,
    [
      [0, 1],
      [1, 2],
    ],
    []
  )
); //[0,1,-1]
// console.log(shortestAlternatingPaths(3, [[0, 1]], [[2, 1]])); //[0,1,-1]
// console.log(shortestAlternatingPaths(3, [[0, 1]], [[1, 2]])); //[0,1,2]
// console.log(
//   shortestAlternatingPaths(
//     3,
//     [
//       [0, 1],
//       [0, 2],
//     ],
//     [[1, 0]]
//   )
// ); //[0,1,1]
