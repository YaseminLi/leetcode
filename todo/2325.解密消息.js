/*
 * @lc app=leetcode.cn id=2325 lang=javascript
 *
 * [2325] 解密消息
 */

// @lc code=start
/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  let curCharcode = 97;
  const temp = {};

  for (let i = 0; i < key.length; i += 1) {
    if (key[i] !== " " && !temp[key[i]]) {
      temp[key[i]] = String.fromCharCode(curCharcode);
      curCharcode += 1;
    }
  }
  //   console.log(temp);

  let result = "";
  for (let i = 0; i < message.length; i += 1) {
    result += message[i] === " " ? " " : temp[message[i]];
  }
  return result;
};
// @lc code=end
console.log(
  decodeMessage(
    "the quick brown fox jumps over the lazy dog",
    "vkbs bs t suepuv"
  )
); //"this is a secret"
console.log(
  decodeMessage(
    "eljuxhpwnyrdgtqkviszcfmabo",
    "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
  )
); //"the five boxing wizards jump quickly"
