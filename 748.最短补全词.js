/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短补全词
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  let shortestWord = "";
  const shortStrArr = licensePlate
    .toLowerCase()
    .split("")
    .filter((item) => /[a-z]/i.test(item));
  for (let i = 0; i < words.length; i++) {
    const copyArr = [...shortStrArr];
    //判断每一个words
    for (let j = 0; j < words[i].length; j += 1) {
      if (copyArr.length === 0) {
        break;
      } else {
        const targetIndex = copyArr.findIndex((item) => item === words[i][j]);
        if (targetIndex > -1) {
          copyArr.splice(targetIndex, 1);
        }
      }
    }
    if (
      copyArr.length === 0 &&
      (!shortestWord.length || words[i].length < shortestWord.length)
    ) {
      shortestWord = words[i];
    }
  }
  return shortestWord;
};
// @lc code=end
console.log(
  shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])
); //steps
console.log(
  shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"])
); //pest
