/**
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function (s) {
// 	if (s.length === 0) return true;
// 	s = s.replace(/[\W|_]/g, "");
// 	let palindrome = true;
// 	let i = 0;
// 	j = s.length - 1;
// 	while (i < j) {
// 		if (
// 			s[i].toLowerCase() !== s[j].toLowerCase()
// 		) {
// 			palindrome = false;
// 			break;
// 		}
// 		i++;
// 		j--;
// 	}
// 	return palindrome;
// };
var isPalindrome = function (s) {
	let left = 0
	let right = s.length - 1
	const reg = /[A-Za-z0-9]/
	while (left < right) {
		if (!(reg.test(s[left]))) {
			left += 1
			continue;
		} else if (!(reg.test(s[right]))) {
			right -= 1
			continue;
		} else if (s[left].toLocaleLowerCase() !== s[right].toLocaleLowerCase()) {
			return false
		}
		left += 1
		right -= 1
	}
	return true
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("0P"));
