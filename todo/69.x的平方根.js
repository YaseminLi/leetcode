/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    //1⃣️排除特殊情况
    if (x == 1 || x == 0) {
        return x
    }
    if (x > 1 && x < 4) {
        return 1
    }
    //平方根不会大于数字的一半
    let l = 1;
    let r = Math.floor(x / 2)+1
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (mid * mid === x) {
            return mid
        }
        if (mid * mid < x) {
            if ((mid + 1) * (mid + 1) > x) {
                return mid
            } if ((mid + 1) * (mid + 1) == x) {
                return mid + 1
            }
            l = mid
        } else {
            if ((mid - 1) * (mid - 1) <x) {
                return mid-1
            }
            if ((mid - 1) * (mid -1) == x) {
                return mid 
            }
            r = mid - 1
        }
    }

};
// console.log(mySqrt(8));
// console.log(mySqrt(6));
console.log(mySqrt(36));
// console.log(mySqrt(4));
// console.log(mySqrt(1));
