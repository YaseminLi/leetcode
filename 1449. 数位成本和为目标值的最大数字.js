/**
 * 给你一个整数数组 cost 和一个整数 target 。请你返回满足如下规则可以得到的 最大 整数：

给当前结果添加一个数位（i + 1）的成本为 cost[i] （cost 数组下标从 0 开始）。
总成本必须恰好等于 target 。
添加的数位中没有数字 0 。
由于答案可能会很大，请你以字符串形式返回。

如果按照上述要求无法得到任何整数，请你返回 "0" 。

链接：https://leetcode-cn.com/problems/form-largest-integer-with-digits-that-add-up-to-target

输入：cost = [4,3,2,5,6,7,2,5,5], target = 9
输出："7772"
解释：添加数位 '7' 的成本为 2 ，添加数位 '2' 的成本为 3 。所以 "7772" 的代价为 2*3+ 3*1 = 9 。 "977" 也是满足要求的数字，但 "7772" 是较大的数字。


 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */


const predict = "75555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555"




const haveChild = (target, nums) => {
  const map = new Map()
  let result = false
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) || target % nums[i] === 0) {
      return true
    } else {
      map.set(target - nums[i], i)
    }
  }
  return result
}

const removeRepeat = (map) => {
  const keys = [...map.keys()]
  keys.sort((a, b) => b - a)
  console.log(keys);
  keys.forEach((item, index) => {
    if (haveChild(item, keys.slice(index + 1))) {
      map.delete(item)
    }
  })
  console.log(map);
}

const compareGetMax = (str1, str2) => {
  // console.log('compare: ', str1, str2);
  if (str1.length !== str2.length) {
    return str1.length > str2.length ? str1 : str2
  }
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) {
      continue
    }
    return str1[i] > str2[i] ? str1 : str2
  }
  return str1
}
var largestNumber = function (cost, target) {

  // 对cost 去重，保留数字大的成本
  const costMap = new Map()
  cost.forEach((item, index) => {
    if (!costMap.get(item) || (costMap.get(item) <= index + 1)) {
      costMap.set(item, index + 1)
    }
  })

  // 删除map中target为key的sum
  removeRepeat(costMap)

  // key：target- value:getMaxNum(target) map
  const maxNumMap = new Map()

  // value为‘1’  values为 ‘234‘ 找出这四个数字组合出的最大值
  const combineTwo = (value, values) => {
    const arr = (values + '').split('').concat(value)
    arr.sort((a, b) => b - a)

    return arr.join('')
  }

  // 获取满足target的最大数字
  const getMaxNum = (item) => {
    // console.log("try find: ", item);
    var cache = maxNumMap.get(item)
    if (cache || cache === null) {
      return cache
    }

    let curMaxNum = null // 记录分别去掉costMap[i] 的最大值
    costMap.forEach((value, key) => {
      if (item === 0) {
        curMaxNum = ''
      }

      if (item - key >= 0) {
        const temp = getMaxNum(item - key)
        if (temp != null) {
          const result = combineTwo(value, temp)
          console.log(result);
          curMaxNum = compareGetMax(result, curMaxNum || '')
        }
      }
    })
    maxNumMap.set(item, curMaxNum)
    return curMaxNum
  }


  return getMaxNum(target) || '0'
};

var largestNumber = function(cost, target) {
  const dp = new Array(target + 1);
  dp[0] = '';
  // 字符串比较
  const strCompare = (str1 = '', str2 = '') => {
      if (str1.length == str2.length) {
          // 长度相同，可以直接比较
          return str1 > str2 ? str1 : str2;
      } else {
          // 取长度长的
          return str1.length > str2.length ? str1 : str2;
      }
  }
  for (let i = 1; i < 10; i++) {
      const val = cost[i - 1];
      for (let j = val; j <= target; j++) {
          // j - val对应下标0处，或已经存在组合，此时才能组合出j
          if (dp[j - val] == '' || dp[j - val]) {
              // i + dp[j - val]拼接新的字符串
              dp[j] = strCompare(dp[j], i + dp[j - val]);
          }
      }
  }
  // 若没有对应的组合返回'0'
  return dp[target] ? dp[target] : '0';
};

console.log(largestNumber([4, 3, 2, 5, 6, 7, 2, 5, 5], 9));//"7772"
// console.log(largestNumber([210, 77, 91, 105, 3276, 881, 957, 3317, 1234], 4034));//"7772"
// console.log(largestNumber([7, 6, 5, 5, 5, 6, 8, 7, 8], 12)); //'85
// console.log(largestNumber([2, 4, 6, 2, 4, 6, 4, 4, 4], 5)); //0
// console.log(largestNumber([6, 10, 15, 40, 40, 40, 40, 40, 40], 47)); //"32211"
// console.log(largestNumber([4, 2, 3, 3, 4, 5, 5, 2, 2], 795)); //"32211"
// console.log(largestNumber([5, 3, 4, 4, 2, 5, 3, 5, 5], 743));

