// 元音字母：a,e,i,o,u
// 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

 

// 示例 1：

// 输入："hello"
// 输出："holle"
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  const arr = s.split('')
  let l = 0, r = s.length - 1
  while (l < r) {
    if (!vowels.has(arr[l])) {
      l += 1;
      continue
    }
    if (!vowels.has(arr[r])) {
      r -= 1;
      continue
    }
    [arr[r], arr[l]] = [arr[l], arr[r]]
    r -= 1
    l += 1
  }
  return arr.join('')
};
console.log(reverseVowels('hello'));