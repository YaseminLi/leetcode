/*
 * @lc app=leetcode.cn id=2287 lang=javascript
 *
 * [2287] 重排字符形成目标字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
// target str转obj
// 遍历自字符串s[i]，obj[i]若存在，value值加1
// 取obj中value最小值
// var rearrangeCharacters = function (s, target) {
//   //target中只有一种字符
//   if (new Set(target.split("")).size === 1) {
//     return Math.floor(
//       s.match(new RegExp(target[0], "g"))?.length / target.length
//     );
//   }

//   const obj = {};
//   for (let i = 0; i < target.length; i += 1) {
//     obj[target[i]] = 0;
//   }

//   for (let i = 0; i < s.length; i += 1) {
//     if (obj[s[i]] != null) {
//       obj[s[i]] = obj[s[i]] + 1;
//     }
//   }

//   let maxCopy = null;
//   for (let i = 0; i < target.length; i += 1) {
//     maxCopy =
//       maxCopy != null ? Math.min(obj[target[i]], maxCopy) : obj[target[i]];
//   }
//   return maxCopy;
// };

// 上面这种不行，target中有重复字符串时x

// target str转obj
// 遍历自字符串s[i]，obj[i]若存在，value值加1
// 遍历target
var rearrangeCharacters = function (s, target) {
  const obj = {};
  for (let i = 0; i < target.length; i += 1) {
    obj[target[i]] = 0;
  }

  for (let i = 0; i < s.length; i += 1) {
    if (obj[s[i]] != null) {
      obj[s[i]] = obj[s[i]] + 1;
    }
  }

  let maxCopy = 0;
  while (true) {
    for (let i = 0; i < target.length; i += 1) {
      if (obj[target[i]]) {
        obj[target[i]] = obj[target[i]] - 1;
      } else {
        return maxCopy;
      }
    }
    maxCopy += 1;
  }
};
// @lc code=end
console.log(rearrangeCharacters("ilovecodingonleetcode", "code")); //2
console.log(rearrangeCharacters("abcba", "abc")); //1
console.log(rearrangeCharacters("abbaccaddaeea", "aaaaa")); //1
console.log(rearrangeCharacters("codecodecodecode", "codecode")); //2
