/**
 * 在数组A[0...n-1]中，有所谓的魔术索引，满足条件A[i] = i。给定一个有序整数数组，编写一种方法找出魔术索引，若有的话，在数组A中找出一个魔术索引，如果没有，则返回-1。若有多个魔术索引，返回索引值最小的一个。
示例1:
 输入：nums = [0, 2, 3, 4, 5]
 输出：0
 说明: 0下标的元素为0
示例2:
 输入：nums = [1, 1, 1]
 输出：1
链接：https://leetcode-cn.com/problems/magic-index-lcci
 * @param {number[]} nums
 * @return {number}
 */

// 依次遍历过去，判断当前元素值和索引是否相等；因为是有序数组，当前元素值大于等于索引时即可结束
var findMagicIndex = function (nums) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (i === nums[i]) {
      return i;
    }
  }
  return -1;
}; //80ms 超33% 好慢

// 用二分查找发呢？取中间值，左边没有，验证中间，中间再没有，验证右边
var findMagicIndex = function (nums) {
  // 查找l-r区间内的魔术索引
  var helper = function (l, r) {
    if (l > r) {
      return -1;
    }
    const mid = l + ((r - l) >> 1); //用右移取二分之一整数比除以2的计算快
    const result = helper(l, mid - 1);
    if (result !== -1) {
      return result;
    } else if (nums[mid] === mid) {
      return mid;
    } else {
      return helper(mid + 1, r);
    }
  };
  return helper(0, nums.length - 1);
};

function unitTest() {
  const cases = [
    {
      data: [0, 2, 3, 4, 5],
      expect: 0,
    },
    {
      data: [1, 1, 1],
      expect: 1,
    },
    {
      data: [1, 2, 2],
      expect: 2,
    },
    {
      data: [7, 8, 9],
      expect: -1,
    },
    {
      data: [
        -531369933,
        -469065528,
        -430059048,
        -428981853,
        -319235969,
        -288076332,
        -286667432,
        -282312559,
        -197049680,
        -197022263,
        -174416117,
        -138027773,
        -121899023,
        -111631966,
        -107567458,
        -70437707,
        -52463072,
        -45519851,
        -38641451,
        -15825815,
        -3835472,
        -1525043,
        22,
        566842886,
        593757472,
        605439236,
        619794079,
        640069993,
        657657758,
        718772950,
        815849552,
        839357142,
        936585256,
        1006188278,
        1042347147,
        1057129320,
        1062178586,
        1069769438,
      ],
      expect: 22,
    },
  ];

  for (let ca of cases) {
    try {
      let result = findMagicIndex(ca.data);
      if (result !== ca.expect) {
        console.log("not pass:", ca, result);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

unitTest();
