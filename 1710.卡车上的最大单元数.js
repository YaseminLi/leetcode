/*
 * @lc app=leetcode.cn id=1710 lang=javascript
 *
 * [1710] 卡车上的最大单元数
 */

// @lc code=start
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */

var maximumUnits = function (boxTypes, truckSize) {
  // 我的方法
  // 1.按照箱子的容量进行排序
  // 2.从容量的高到低取箱子
  // const boxes = [...boxTypes].sort((a, b) => b[1] - a[1]);
  // let curTruckSize = 0; //当前放了几个箱子
  // let maxUnits = 0;

  // // i: 当前箱子类型序号
  // for (let i = 0; i < boxes.length; i += 1) {
  //   const [count, boxSize] = boxes[i];
  //   let remainSize = truckSize - curTruckSize;
  //   if (count > remainSize) {
  //     maxUnits += remainSize * boxSize;
  //     curTruckSize += remainSize;
  //   } else {
  //     maxUnits += count * boxSize;
  //     curTruckSize += count;
  //   }

  //   if (curTruckSize === truckSize) break;
  // }

  // return maxUnits;

  // other solution
  // 累加
  // truckSize依次减小
  const boxes = [...boxTypes].sort((a, b) => b[1] - a[1]);
  let maxUnits = 0;

  // i: 当前箱子类型序号
  for (let i = 0; i < boxes.length; i += 1) {
    let [count, boxSize] = boxes[i];
    while (count && truckSize) {
      maxUnits += boxSize;
      count -= 1;
      truckSize -= 1;
    }
  }

  return maxUnits;
};
// @lc code=end

console.log(
  maximumUnits(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4
  )
); //8
console.log(
  maximumUnits(
    [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9],
    ],
    10
  )
); //91
