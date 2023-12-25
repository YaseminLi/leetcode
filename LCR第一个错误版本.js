/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
// var solution = function (isBadVersion) {
//   /**
//    * @param {integer} n Total versions
//    * @return {integer} The first bad version
//    */
//   return function (n) {
//     let left = 1
//     let right = n
//     while (left < right) {
//       const middle = Math.floor((left + right) / 2)
//       if (!isBadVersion(middle) && isBadVersion(middle)) {
//         return middle
//       }
//       if (isBadVersion(middle)) {
//         right = middle
//       } else {
//         left = middle + 1
//       }
//     }
//     if (left <= n && isBadVersion(left)) {
//       return left
//     }
//     return -1
//   };
// };

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1
    let right = n
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2)
      if (isBadVersion(mid)) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return left
  };
};