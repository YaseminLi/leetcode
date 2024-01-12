/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

如果可以，返回 true ；否则返回 false 。

magazine 中的每个字符只能在 ransomNote 中使用一次。
提示：

1 <= ransomNote.length, magazine.length <= 105
ransomNote 和 magazine 由小写英文字母组成
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
      // 字典库  key:字符串 value：次数
      const map = new Map();
      for (let i = 0; i < magazine.length; i += 1) {
        const cur = magazine[i];
        let count = map.get(cur)||0;
        map.set(cur, count += 1);
      }
      for (let i = 0; i < ransomNote.length; i += 1) {
        const target = ransomNote[i];
        let count = map.get(target);
        if (!count) {
          return false;
        }
        map.set(target, count -= 1);
      }
      return true;
};
// @lc code=end
console.log(canConstruct('a','b'));//false
console.log(canConstruct('aa','ab'));//false
console.log(canConstruct('aa','aab'));//true

