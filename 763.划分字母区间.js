/**
 * 字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。返回一个表示每个字符串片段的长度的列表。
 * 输入：S = "ababcbacadefegdehijhklij"
输出：[9,7,8]
 * @param {string} S
 * @return {number[]}
 * 
 */
//创建一个存储字符片段的数组splited,遍历字符串的元素，在splited中查找包含该元素的项，若找到，该项与splited中后面的合并
var partitionLabels = function (S) {
  const splited = []//存储字符片段
  for (let i = 0; i < S.length; i++) {
    let includedIndex = -1//包含字符的splited中索引
    for (let j = 0; j < splited.length; j++) {
      if (splited[j].includes(S[i])) {
        includedIndex = j
        break
      }
    }
    splited.push(S[i])
    if (includedIndex > -1) {
      const combineStr = splited.slice(includedIndex).join('')
      splited.splice(includedIndex, splited.length - includedIndex, combineStr)
    }
  }
  const result = []
  splited.forEach(item => result.push(item.length))
  return result
};


//第一次遍历，用map存储每个字符出现的最远的下标
//第二次遍历，当前元素的下标和已扫描字符最远位置的下标一样时，可以进行切割
var partitionLabels = function (S) {
  const result = []
  const m = new Map()
  S.split('').forEach((item, index) => m.set(item, index))

  let scanedFarIndex = 0//已扫面字符的最远位置
  let start = 0//待切割的起始位置

  for (let i = 0; i < S.length; i++) {
    const farIndex = m.get(S[i])
    scanedFarIndex = Math.max(scanedFarIndex, farIndex)
    if (scanedFarIndex === i) {
      result.push(scanedFarIndex - start + 1)
      start = i + 1
    }
  }
  return result
}

console.log(partitionLabels('ababcbacadefegdehijhklij'));