/**
 * 输入：
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3
输出：[1,2,2,3,5,6]
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 双指针
// var merge = function (nums1, m, nums2, n) {
//   if(n===0){
//     return nums1.slice(0,m)
//   }
//   let i = 0;j = 0 //指针初始值，nums--i,nums2--j
//   while(j<n,i<m+n){
//     if(i<m+n-j-1){
//       if(nums1[i]<nums2[j]){
//         i++
//       }else{
//         nums1.splice(i,0,nums2[j])
//         i++
//         j++
//       }
//     }else{
//       nums1[i]=nums2[j]
//       i++
//       j++
//     }
//   }
//   nums1.splice(m+n)
//   return nums1
// };

// 从后往前移动双指针，将大的元素从尾部往前放入nums1中
// var merge = function (nums1, m, nums2, n){
//     let index1 = m - 1;
//     let index2 = n - 1;
//     let tail = m + n - 1;

//     while (index1 >= 0 && index2 >= 0) {
//         if (nums1[index1] > nums2[index2]) {
//             nums1[tail] = nums1[index1];
//             index1--;
//         } else {
//             nums1[tail] = nums2[index2];
//             index2--;
//         }
//         tail--;
//     }
//     while (tail >= 0 && index1 >= 0) {
//         nums1[tail] = nums1[index1];
//         index1--;
//         tail--;
//     }
//     while (tail >= 0 && index2 >= 0) {
//         nums1[tail] = nums2[index2];
//         index2--;
//         tail--;
//     }
//   return nums1
// }

var merge = function(nums1, m, nums2, n) {
    let tail=m+n-1
    let index1=m-1
    let index2=n-1

    while(tail>=0&&index1>=0&&index2>=0){
        if(nums1[index1]<nums2[index2]){
            nums1[tail]=nums2[index2]
            index2-=1
        }else {
            nums1[tail]=nums1[index1]
            index1-=1
        }
        tail-=1
    }
    while (tail >= 0 && index1 >= 0) {
        nums1[tail] = nums1[index1];
        index1--;
        tail--;
    }
    while (tail >= 0 && index2 >= 0) {
        nums1[tail] = nums2[index2];
        index2--;
        tail--;
    }
return nums1
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));//[ 1, 2, 2, 3, 5, 6 ]
console.log(merge([1], 1, [2, 5, 6], 3));//[ 1, 2, 5, 6 ]
console.log(merge([1], 1, [],0));//[ 1 ]
console.log(merge([0], 0, [1],1));//[ 1 ]
// console.log(merge([2,0], 1, [1],1));//[ 1,2]