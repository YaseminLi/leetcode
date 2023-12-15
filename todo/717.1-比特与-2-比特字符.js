/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1 比特与 2 比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
//0
// 10 11
// 0结尾
var isOneBitCharacter = function (bits) {
  let lastBit = null;
  let isTwoBit = false;
  for (let i = 0; i < bits.length; i += 1) {
    if (isTwoBit) {
      lastBit = "1" + bits[i];
      isTwoBit = false;
    } else {
      lastBit = bits[i] ? null : bits[i];
      isTwoBit = !!bits[i];
    }
  }

  return lastBit === 0;
};
// @lc code=end
console.log(isOneBitCharacter([1, 0, 0])); //true
console.log(isOneBitCharacter([1, 1, 1, 0])); //false
console.log(isOneBitCharacter([1, 1])); //false
console.log(isOneBitCharacter([0, 0, 0])); //true
