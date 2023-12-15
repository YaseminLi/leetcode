/**
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
整数除法仅保留整数部分。
输入：s = "3+2*2"
输出：7
输入：s = " 3/2 "
输出：1
输入：s = " 3+5 / 2 "
输出：5
 * @param {string} s
 * @return {number}
 */

// sign=[] 存放正负标记
// arr=[] 存放待计算数字
//跳过空格，+/-时。若arr.length===2,合并arr前两项
var calculate = function (s) {
  let ret = 0
  let sign = [1]
  let arr = []
  let len = s.length
  for (let i = 0; i < len; i++) {
    if (s[i] === ' ') {
      continue
    } else if (s[i] === '+' || s[i] === '-') {
      if (arr.length === 2) {
        const sum = arr[0] * sign[0] + arr[1] * sign[1]
        sign = [1]
        arr = [sum]
      }
      if (s[i] === '+') {
        sign.push(1)
      } else if (s[i] === '-') {
        sign.push(-1)
      }
    } else if (s[i] === '/' || s[i] === '*') {
      const tag = s[i]
      i += 1
      let num = 0
      while (i < len && !isNaN(Number(s[i]))) {
        if (s[i] !== ' ') {
          num = num * 10 + Number(s[i])
        }
        i++
      }
      let calc = 0
      const ite = arr.pop()
      const sig = sign.pop()
      if (tag === '/') {
        calc = parseInt(ite * sig / num)
      } else {
        calc = ite * sig * num
      }
      arr.push(calc)
      sign.push(1)
      i--
    } else {
      let num = 0
      while (i < len && !isNaN(Number(s[i]))) {
        if (s[i] !== ' ') {
          num = num * 10 + Number(s[i])
        }
        i++
      }
      arr.push(num)
      i--
    }
  }

  if (arr.length > 0) {
    while (arr.length > 0) {
      ret += arr.pop() * sign.pop()
    }
  }
  return ret
};


// 递归，减法不对
function shiftNumOrSign (str) {
  let hitNum = false
  let num = 0
  let i = 0
  let zhengfu = 1
  for (; i < str.length; i++) {
    if (str[i] == ' ') {
      continue
    }

    if (str[i] == '+' || str[i] == '*' || str[i] == '/') {
      if (!hitNum) {
        return [str[0], str.slice(1)]
      } else {
        break
      }
    }
    if (str[i] == '-') {
      if (zhengfu == -1) {
        break
      } else {
        zhengfu = -1
      }

    }


    if (str[i] >= '0' && str[i] <= '9') {
      hitNum = true
      num = num * 10 + (str[i] - '0')
    } else {
      break
    }
  }
  return [num * zhengfu, str.slice(i)]
}

function suan (num1, num2, sign) {
  switch (sign) {
    case '*':
      return num1 * num2
    case '/':
      return parseInt(num1 / num2)
    case '+':
      return num1 + num2
    case '-':
      return 0-(num1 - num2)
  }
}


var calculate = function (str) {
  let tempNum = 0
  let tempSign = '+'
  while (true) {
    let numOrSign
    [numOrSign, str] = shiftNumOrSign(str)

    if (numOrSign == '+' || numOrSign == '-') {
      return suan(tempNum, calculate(str), numOrSign)
    } else if (numOrSign == '*' || numOrSign == '/') {
      tempSign = numOrSign
    } else {
      tempNum = suan(tempNum, numOrSign, tempSign)
    }
    if (str == "") {
      return tempNum
    }
  }
}


// 
var calculate = function (str) {

}


console.log(calculate("100-1-2"));
console.log(calculate("3+2*2"));
console.log(calculate("3/2 "));
console.log(calculate("3+5 / 2 "));
console.log(calculate("3+5 / 2 "));
console.log(calculate("3+  2 "));
console.log(calculate("1+1+1"));
console.log(calculate("14-3/2"));
console.log(calculate("100-1-2-3-4-5-6-7-8-9-10"));//45





