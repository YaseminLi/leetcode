/**
 * 给你两个版本号 version1 和 version2 ，请你比较它们。

版本号由一个或多个修订号组成，各修订号由一个 '.' 连接。每个修订号由 多位数字 组成，可能包含 前导零 。每个版本号至少包含一个字符。修订号从左到右编号，下标从 0 开始，最左边的修订号下标为 0 ，下一个修订号下标为 1 ，以此类推。例如，2.5.33 和 0.1 都是有效的版本号。

比较版本号时，请按从左到右的顺序依次比较它们的修订号。比较修订号时，只需比较 忽略任何前导零后的整数值 。也就是说，修订号 1 和修订号 001 相等 。如果版本号没有指定某个下标处的修订号，则该修订号视为 0 。例如，版本 1.0 小于版本 1.1 ，因为它们下标为 0 的修订号相同，而下标为 1 的修订号分别为 0 和 1 ，0 < 1 。

返回规则如下：

如果 version1 > version2 返回 1，
如果 version1 < version2 返回 -1，
除此之外返回 0。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/compare-version-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

输入：version1 = "1.01", version2 = "1.001"
输出：0
解释：忽略前导零，"01" 和 "001" 都表示相同的整数 "1"

输入：version1 = "7.5.2.4", version2 = "7.5.3"
输出：-1
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

// 版本号用.分成数组
var compareVersion = function (version1, version2) {
  const version1Arr = version1.split('.')
  const version2Arr = version2.split('.')

  let i=0

  for (; i < version1Arr.length && i < version2Arr.length; i++) {
    if (version1Arr[i] - 0 > version2Arr[i] - 0) {
      return 1
    }
    if (version1Arr[i] - 0 < version2Arr[i] - 0) {
      return -1
    }
  }

  if(i===version1Arr.length){
    for(let j=i;j<version2Arr.length;j++){
      if( version2Arr[j] - 0!==0)return -1
    }
  }

  if(i===version2Arr.length){
    for(let j=i;j<version1Arr.length;j++){
      if( version1Arr[j] - 0!==0)return 1
    }
  }

  return 0

};

console.log(compareVersion("1.01","1.001"));//0
console.log(compareVersion("7.5.2.4","7.5.3"));//-1
console.log(compareVersion("1.0","1.0.0"));//0
console.log(compareVersion("0.1","1.1"));//-1
console.log(compareVersion("1.0.1","1"));//1