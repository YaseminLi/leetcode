/*
 * @lc app=leetcode.cn id=1410 lang=javascript
 *
 * [1410] HTML 实体解析器
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function (text) {
  let result = ''

  const entityMap = new Map([
    ["&quot;", '"'],
    ["&apos;", "'"],
    ["&amp;", '&'],
    ["&gt;", '>'],
    ["&lt;", '<'],
    ["&frasl;", '/'],
  ])

  for (let i = 0; i < text.length;) {
    let isMatch = false
    for (let [key, value] of entityMap.entries()) {
      const keyLength = key.length
      if (text.slice(i, i + keyLength) === key) {
        isMatch = true
        result += value
        i += keyLength
        break
      }
    }
    if (!isMatch) {
      result += text[i]
      i += 1
    }
  }
  return result
};
// @lc code=end
console.log(entityParser("&amp; is an HTML entity but &ambassador; is not."));//"& is an HTML entity but &ambassador; is not."
console.log(entityParser("and I quote: &quot;...&quot;"));//"and I quote: \"...\""
console.log(entityParser("Stay home! Practice on Leetcode :)"));//"Stay home! Practice on Leetcode :)"
console.log(entityParser("x &gt; y &amp;&amp; x &lt; y is always false"));//"x > y && x < y is always false"
console.log(entityParser("leetcode.com&frasl;problemset&frasl;all"));//"leetcode.com/problemset/all"

