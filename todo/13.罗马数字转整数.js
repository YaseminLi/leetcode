/*
 * @lc app=leetcode.cn id=13 lang=javascript
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let num = 0;
  for (let i = 0; i < s.length; i += 1) {
    const cur = s[i];
    if (i + 1 !== s.length && ["I", "X", "C"].includes(cur)) {
      const combimeStr = cur + s[i + 1];
      if (map[combimeStr]) {
        num += map[combimeStr];
        i += 1;
        continue;
      }
    }
    num += map[cur];
  }
  return num;
};
// @lc code=end

// console.log(romanToInt("MCMXCIV")); //1994
// console.log(romanToInt("LVIII")); //58
console.log(romanToInt("DCXXI")); //621
