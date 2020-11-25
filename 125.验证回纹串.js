/**
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	if (s.length === 0) return true;
	s = s.replace(/[\W|_]/g, "");
	let palindrome = true;
	let i = 0;
	j = s.length - 1;
	while (i < j) {
		if (
			s[i].toLowerCase() !== s[j].toLowerCase()
		) {
			palindrome = false;
			break;
		}
		i++;
		j--;
	}
	return palindrome;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("0P"));
