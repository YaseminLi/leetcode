/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if(x==1||x==0){
        return x
    }
    for (let i = Math.floor(x / 2); i >=1;) {
        if (i * i > x) {
            i = Math.floor(i / 2)
        }
        if (i * i < x) {
            if ((i + 1) * (i + 1) > x) {
                return i
            } else { i += 1 }
        }
        if (i * i == x) {
            return i
        }
    }
};
console.log(mySqrt(8));
console.log(mySqrt(6));
console.log(mySqrt(4));
console.log(mySqrt(1));
