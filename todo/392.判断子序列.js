/**
 * 示例 1:
s = "abc", t = "ahbgdc"
返回 true.
示例 2:
s = "axc", t = "ahbgdc"
返回 false.
链接：https://leetcode-cn.com/problems/is-subsequence
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isSubsequence = function (s, t) {
//   const sl = s.length;
//   const tl = t.length;
//   if (sl > tl) {
//     return false;
//   }
//   for (let i = 0; i < sl; i++) {
//     const target = s[i];
//     const index = t.indexOf(target);
//     if (index < 0) {
//       return false;
//     } else {
//       t = t.slice(index + 1);
//       if (t.length < sl - i - 1) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

// //优化
// var isSubsequence = function (s, t) {
//   const sl = s.length;
//   let index = 0;
//   for (let i = 0; i < sl; i++) {
//     index = t.indexOf(s[i], index);
//     if (index < 0) {
//       return false;
//     }
//     index++;
//   }
//   return true;
// };

// 双指针写法
// var isSubsequence = function (s, t) {
//   const sl = s.length;
//   const tl = t.length;
//   if (sl > tl) {
//     return false;
//   }
//   let i = 0;
//   let j = 0;
//   while ((i < sl, j < tl)) {
//     if (s[i] === t[j]) {
//       i++;
//       j++;
//       continue;
//     } else {
//       j++;
//     }
//   }
//   if (i < sl) {
//     return false;
//   }
//   return true;
// };
