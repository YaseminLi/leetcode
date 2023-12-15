/**
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
num1 和num2 的长度都小于 5100.
num1 和num2 都只包含数字 0-9.
num1 和num2 都不包含任何前导零。
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
链接：https://leetcode-cn.com/problems/add-strings
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

 // 最原始的从个位开始计算，需要从尾部同时遍历两个数组
var addStrings = function(num1, num2) {
    const l1=num1.length
    const l2=num2.length
    let over=0
    const sum=[]
    let i=l1-1
    let j=l2-1
    while(i>=-1||j>=-1){
      let m=over
      if(num1[i]>0){
        m=m+Number(num1[i])
      }
      if(num2[j]>0){
        m=m+Number(num2[j])
      }
      if(m>9){
        over=1
        m=m-10
      }else{
        over=0
      }
      if(i>-1||j>-1||m>0){
        sum.unshift(m)
      }
      i--
      j--
    }
    let x=0
    if(i!==j){
      x=i>j?num1.substring(0,i+1):num2.substring(0,j+1)
    }
      if(x>0){
        sum.unshift(x)
      }
      
    return sum.join('')
}; 
// 108 ms, 在所有 JavaScript 提交中击败了14.52%的用户
// 41.2 MB, 在所有 JavaScript 提交中击败了5.88%的用户


// 逻辑好复杂……
var addStrings = function(num1, num2) {
  let res='' //结果
  let carry=0 //是否进位{
  for(let i=num1.length-1,j=num2.length-1;i>=0||j>=0;i--,j--){
    let n1=num1[i]>=0?+num1[i]:0 //i遍历完j还没有遍历完时，num[i]为undefined用0计算
    let n2=num2[j]>=0?+num2[j]:0
    const sum=n1+n2+carry
    res=sum%10+res
    carry=sum/10|0
  }
  carry&&(res='1'+res)
  return res
}; 
// 96 ms, 在所有 JavaScript 提交中击败了33.72%的用户
// 41.2 MB, 在所有 JavaScript 提交中击败了5.88%的用户

var addStrings = function(num1, num2) {
  let res='' //结果
  let carry=0 //是否进位{
  for(let i=num1.length-1,j=num2.length-1;i>=0||j>=0;i--,j--){
    let n1=num1[i]>=0?+num1[i]:0 //i遍历完j还没有遍历完时，num[i]为undefined用0计算
    let n2=num2[j]>=0?+num2[j]:0
    const sum=(+num1[i]||0)+(+num2[j]||0)+carry
    res=sum%10+res
    carry=sum/10|0
  }
  carry&&(res='1'+res)
  return res
}; 

const cases = [
  {
    data: '9',
    data2:'99',
    expect: '108',
  },
  {
    data:"401716832807512840963",
    data2:"167141802233061013023557397451289113296441069",
    expect:"167141802233061013023557799168121920809282032"
  },
  {
    data: '0',
    data2:'0',
    expect: '0',
  },
  {
    data: '1',
    data2:'9',
    expect: '10',
  },
  {
    data: '123',
    data2:'456',
    expect: '579',
  },
  {
    data: '9',
    data2:'567',
    expect: '576',
  },
  {
    data: '23',
    data2:'1',
    expect: '24',
  },
];
function unitTest() {
  for (let ca of cases) {
    try {
      let result = addStrings(ca.data,ca.data2);
      if (result !== ca.expect) {
        console.log("not pass:", ca, result);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

unitTest();