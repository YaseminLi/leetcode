/*
 * @lc app=leetcode.cn id=2103 lang=javascript
 *
 * [2103] 环和杆
 * 总计有 n 个环，环的颜色可以是红、绿、蓝中的一种。这些环分别穿在 10 根编号为 0 到 9 的杆上。

给你一个长度为 2n 的字符串 rings ，表示这 n 个环在杆上的分布。rings 中每两个字符形成一个 颜色位置对 ，用于描述每个环：

第 i 对中的 第一个 字符表示第 i 个环的 颜色（'R'、'G'、'B'）。
第 i 对中的 第二个 字符表示第 i 个环的 位置，也就是位于哪根杆上（'0' 到 '9'）。
例如，"R3G2B1" 表示：共有 n == 3 个环，红色的环在编号为 3 的杆上，绿色的环在编号为 2 的杆上，蓝色的环在编号为 1 的杆上。

找出所有集齐 全部三种颜色 环的杆，并返回这种杆的数量。
 */

// @lc code=start
/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  let count = 0
  const map = new Map()
  for (let i = 0; i < rings.length; i += 2) {
    const color = rings[i]
    const num = rings[i + 1]
    const exist = map.get(num)
    map.set(num, new Set([...(exist || []), color]))
  }
  // console.log('map',map);
  for (let values of map.values()) {
    if (values.size === 3) {
      count += 1
    }
  }
  return count
};
// @lc code=end
console.log(countPoints("B0B6G0R6R0R6G9"));//1
console.log(countPoints("B0R0G0R9R0B0G0"));//1
console.log(countPoints("G4"));//0
