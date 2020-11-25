/**
 * 输入："leetcode"
 * 输出："leotcede"
 * @param {string} s
 * @return {string}
 */
// 元音字母aeiou
var reverseVowels = function (s) {
  const vowels = "aeiouAEIOU";
  if (s.length < 2) return s;
  let i = 0;
  j = s.length - 1;
  s=s.split('')
  while (i < j) {
    if (
      vowels.includes(s[i]) &&
      vowels.includes(s[j])
    ) {
      const m = s[i]
      s[i] = s[j]
      s[j] = m
      i++;
      j--;
    } else if (vowels.includes(s[i])) {
      j--;
    } else if (vowels.includes(s[j])) {
      i++;
    } else {
      i++;
      j--;
    }
  }
  return s.join('')
};
console.log(reverseVowels('leetcode'));