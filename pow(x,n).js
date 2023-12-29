var myPow = function (x, n) {
  // if (x === 0 || x === 1 || n === 1) return x
  // if (n < 0) {
  //   return 1 / myPow(x, -n)
  // }
  // return x * myPow(x, n - 1)
  if (n === 0) return 1 // n=0直接返回1
  if (n < 0) {   				//n<0时 x的n次方等于1除以x的-n次方分
    return 1 / myPow(x, -n)
  }
  if (n % 2) {    //n是奇数时 x的n次方 = x*x的n-1次方
    return x * myPow(x, n - 1)
  }
  return myPow(x * x, n / 2) //n是偶数，使用分治，一分为二，等于x*x的n/2次方 
};
console.log((myPow(2.00000, 10)));//1024.00000
console.log((myPow(2.10000, 3)));//9.26100
console.log((myPow(2.00000, -2)));//0.25000
console.log((myPow(-2.00000, 2)));//0.25000
console.log((myPow(0.00001, 2147483647)));//0.25000