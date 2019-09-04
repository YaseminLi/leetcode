/**
 * @param {number} n
 * @return {string[]}
 * 写一个程序，输出从 1 到 n 数字的字符串表示。
1. 如果 n 是3的倍数，输出“Fizz”；
2. 如果 n 是5的倍数，输出“Buzz”；
3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
链接：https://leetcode-cn.com/problems/fizz-buzz
 */

 //比求余快
var fizzBuzz = function (n) {
    let arr = []
    let i = 1;
    let j = 1
    let k = 1
    for (i, j, k; i < n + 1; i++ , j++ , k++) {
        let item =''
        if(j===3||k===5){
            if(j===3){
                item="Fizz"
                j=0
            }
            if(k===5){
                item+="Buzz"
                k=0
            }
        }else{
            item=i+''
        }
        // if (j === 3 && k !== 5) {
        //     item = "Fizz"
        //     j = 0
        // }
        // if (j !== 3 && k === 5) {
        //     item = 'Buzz'
        //     k = 0
        // }
        // if (j === 3 && k === 5) {
        //     item = "FizzBuzz"
        //     j = 0
        //     k = 0
        // }
        arr.push(item)
    }
    return arr
}
// var fizzBuzz = function (n) {
//     let arr = []
//     for (let i = 1; i < n+1; i++) {
//         let item = ''
//         if (i % 3 === 0 && i % 5 === 0) {
//             item = "FizzBuzz"
//         } else if (i % 3 === 0 && i % 5 !== 0) {
//             item = "Fizz"
//         } else if (i % 3 !== 0 && i % 5 === 0) {
//             item = "Buzz"
//         } else {
//             item = i+''
//         }
//         arr.push(item)
//     }
//     return arr
// };
console.log(fizzBuzz(15));
