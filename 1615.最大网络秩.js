/*
 * @lc app=leetcode.cn id=1615 lang=javascript
 *
 * [1615] 最大网络秩
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
// map
// key cityindex
// value 和该城市相连的cityIndex
var maximalNetworkRank = function(n, roads) {
    const map={}
    roads.forEach(road=>{
        const [city1,city2]=road

        if(map[city1]==null){
            map[city1]=[]
        }
        map[city1].push(city2)

        if(map[city2]==null){
            map[city2]=[]
        }
        map[city2].push(city1)
    })
    console.log("---------- ~ file: 1615.最大网络秩.js:18 ~ maximalNetworkRank ~ map:", map)
    let maxCount=0
    Object.keys(map).forEach(city=>{
        const relativeCitys=map[city]
        relativeCitys.forEach(item=>{
            const preCount=relativeCitys.length
            const sufCount=map[item]?.length

            const curCityMax=!sufCount?0:preCount+sufCount-1
            console.log("---------- ~ file: 1615.最大网络秩.js:40 ~ Object.keys ~ curCityMax:", curCityMax)
            maxCount=Math.max(maxCount,curCityMax)
        })
    })
    return maxCount

};
// @lc code=end
// console.log(maximalNetworkRank(4,[[0,1],[0,3],[1,2],[1,3]]));//4
// console.log(maximalNetworkRank(5, [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]));//5
console.log(maximalNetworkRank(8, [[0,1],[1,2],[2,3],[2,4],[5,6],[5,7]]));//5

