/**
 * @param {number} num
 * @return {string}
 */

 //方法一 从高位开始判断每个数字 216ms pass
var intToRoman = function (num) {
    if (num < 1 || num > 3999) {
        return '超出罗马数范围'
    }
    let map = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    }
    let item = ''
    let str = num + ''
    let len = str.length
    let j = Math.pow(10, len - 1)
    for (let i = 0; i < len; i++ , j = j / 10) {
        let m = Number(str[i])
        switch (m) {
            case 0:
                break;
            case 9:
                item += map[j] + map[j * 10];
                break;
            case 4:
                item += map[j] + map[j * 5];
                break;
                //合并1～3 5～8的两个for循环
            case ((m > 0 && m < 4 || m > 4 && m < 9) ? m : -1):
                let a = Math.floor(m / 5)
                let b = m % 5
                item += a == 1 ? map[j * 5] : ''
                for (let n = 0; n < b; n++) {
                    item += map[j]
                }
                break;
            // case ((m > 0 && m < 4) ? m : -1):
            //     for (let n = 0; n < m; n++) {
            //         item += map[j]
            //     }
            //     break;
            // case ((m > 4 && m < 9) ? m : -1):
            //     item += map[j * 5]
            //     for (let n = 0; n < (m - 5); n++) {
            //         item += map[j]
            //     }
            //     break;
        }
    }
    return item
};

//方法二：最大罗马数为15位，从低位开始填充， 340ms
// var intToRoman = function (num) {
//     if (num < 1 || num > 3999) {
//         return '超出罗马数范围'
//     }
//     let roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
//     let arr = []
//     let i = 14
//     let j=0
//     for (j,num; num > 0; num = Math.floor(num / 10),j+=2) {
//         for (let a = num % 10; a > 0; a--) {
//             //a为每位上的数字
//             switch (a) {
//                 case 1:
//                     arr[i--] = roman[j];
//                     break;
//                 case 2:
//                     arr[i--] = roman[j];
//                     break;
//                 case 3:
//                     arr[i--] = roman[j];
//                     break;
//                 case 4:
//                     arr[i--] = roman[j + 1];
//                     a = 2
//                     break;
//                 case 5:
//                     arr[i--] = roman[j + 1];
//                     a=1
//                     break;
//                 case 6:
//                     arr[i--] = roman[j];
//                     break;
//                 case 7:
//                     arr[i--] = roman[j];
//                     break;
//                 case 8:
//                     arr[i--] = roman[j];
//                     break;
//                 case 9:
//                     arr[i--] = roman[j + 2];
//                     a = 2
//                     break;
//             }
//         }
//     }

//     arr=arr.filter(item=>item!=null).join('')
//     return arr
// }
// console.log(intToRoman(1994));
// console.log(intToRoman(3));
// console.log(intToRoman(4));
// console.log(intToRoman(9));
console.log(intToRoman(58));

