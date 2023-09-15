/*
 * @lc app=leetcode.cn id=2488 lang=javascript
 *
 * [2488] 统计中位数为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 数组分为两部分，左边比K小，右边比K大
// 取数量较小（左：len+1 右：len 相等取右）的部分为组合，分成长度为1到len的数组，共几种组合
// var countSubarrays = function (nums, k) {
//   const minNums = [];
//   const maxNums = [];
//   nums.forEach((i) => {
//     if (i < k) {
//       minNums.push(i);
//     } else if (i > k) {
//       maxNums.push(i);
//     }
//   });
//   console.log("minNums,maxNums", minNums, maxNums);

//   if (minNums?.length === 0) return maxNums.length;
//   if (maxNums?.length === 0) return 1;

//   const minPart = [];
//   const maxPart = [];
//   if (minNums.length + 1 < maxNums.length) {
//     //取minNums
//     minPart.splice(0, 0, ...minNums);
//     maxPart.splice(0, 0, ...maxNums);
//   } else {
//     minPart.splice(0, 0, ...maxNums);
//     maxPart.splice(0, 0, ...minNums);
//   }
//   console.log("minPart,maxPart", minPart, maxPart);

//   /**
//    * 获得从n中取m的所有组合
//    */
//   const obj = {};
//   function getFlagCount(n, m) {
//     if (n == m || m == 0 || n == 0) return 1;
//     let key = n + "-" + m;
//     if (obj[key]) return obj[key];
//     const ret = getFlagCount(n - 1, m - 1) + getFlagCount(n - 1, m); //实现递归
//     obj[key] = ret;
//     return ret;
//   }

//   let count = 0;
//   // i - 取几个数
//   for (let i = 1; i <= minPart.length; i += 1) {
//     const minCount = getFlagCount(minPart.length + Number(!(i % 2)), i);
//     const maxCount = getFlagCount(maxPart.length, i);
//     const totalCount = minCount * maxCount;
//     count += totalCount;
//   }
//   return count;
// };

// 需是连续数组
// var countSubarrays = function (nums, k) {
//   const minNums = [];
//   const maxNums = [];

//   let isLess = true;
//   nums.forEach((i) => {
//     if (i < k && isLess) {
//       minNums.push(i);
//     } else if (i === k) {
//       isLess = false;
//     } else if (i > k && !isLess) {
//       maxNums.push(i);
//     }
//   });
//   console.log("minNums,maxNums", minNums, maxNums);

//   if (minNums?.length === 0) return maxNums.length;
//   if (maxNums?.length === 0) return 1;

//   const minPart = [];
//   const maxPart = [];
//   if (minNums.length + 1 < maxNums.length) {
//     //取minNums
//     minPart.splice(0, 0, ...minNums);
//     maxPart.splice(0, 0, ...maxNums);
//   } else {
//     minPart.splice(0, 0, ...maxNums);
//     maxPart.splice(0, 0, ...minNums);
//   }
//   console.log("minPart,maxPart", minPart, maxPart);

//   /**
//    * 获得从n中取m的所有组合
//    */
//   const obj = {};
//   function getFlagCount(n, m) {
//     if (n == m || m == 0 || n == 0) return 1;
//     let key = n + "-" + m;
//     if (obj[key]) return obj[key];
//     const ret = getFlagCount(n - 1, m - 1) + getFlagCount(n - 1, m); //实现递归
//     obj[key] = ret;
//     return ret;
//   }

//   let count = 0;
//   // i - 取几个数
//   for (let i = 1; i <= minPart.length; i += 1) {
//     const minCount = getFlagCount(minPart.length + Number(!(i % 2)), i);
//     const maxCount = getFlagCount(maxPart.length, i);
//     const totalCount = minCount * maxCount;
//     count += totalCount;
//   }
//   return count;
// };

// 滑动窗口
// 包含目标数字，数组长为1～n 的子数组滑动
var countSubarrays = function (nums, k) {
  if (nums.length === 1) return 1;
  let count = 1;
  const tagetIndex = nums.findIndex((target) => target === k);

  let len = 2;
  let startMinIndex = tagetIndex - len + 1;
  if (startMinIndex < 0) {
    startMinIndex = 0;
  }
  let endMaxIndex = startMinIndex + len - 1;
  while (startMinIndex <= tagetIndex && endMaxIndex < nums.length) {
    // console.log('startIndex',len,startMinIndex);
    for (
      let startIndex = startMinIndex;
      startIndex <= tagetIndex && startIndex + len - 1 < nums.length;
      startIndex += 1
    ) {
      
    //   const subArr = nums
    //     .slice(startIndex, startIndex + len)
    //     .sort((a, b) => a - b);
    //   const subTargetIndex = subArr.findIndex((target) => target === k);
    //   if (len % 2 === 1 && subTargetIndex === (len - 1) / 2) {
    //     // console.log('subArr',subArr,startMinIndex,endMaxIndex);
    //     count += 1;
    //   } else if (
    //     len % 2 === 0 &&
    //     subTargetIndex === Math.floor((len - 1) / 2)
    //   ) {
    //     count += 1;
    //     // console.log('subArr',subArr,startMinIndex,endMaxIndex);
    //   }

            let minCount=0
            let maxCount=0

            let minCountTotal=len%2===1?Math.floor(len/2):len/2-1
            let maxCountTotal=len-1-minCountTotal
            console.log('minCountTotal',minCountTotal,maxCountTotal,startIndex);
            let j=startIndex
            while(minCount<=minCountTotal&&maxCount<=maxCountTotal&&j<startIndex+len){
                if(nums[j]<k){
                    minCount+=1
                }else if(nums[j]>k){
                    maxCount+=1
                }
                j+=1
            }

            if(minCount+maxCount===len-1){
                count+=1
            }
            console.log('minCount',minCount,maxCount,count);
    }

    len += 1;
    // console.log('len',len);
    startMinIndex = tagetIndex - len + 1;
    if (startMinIndex < 0) {
      startMinIndex = 0;
    }
    endMaxIndex = startMinIndex + len - 1;
  }
  return count;
};
// @lc code=end
console.log(countSubarrays([3, 2, 1, 4, 5], 4)); //3   4，5  4   1，4，5
// console.log(countSubarrays([2, 3, 1], 3)); //1
// console.log(countSubarrays([2, 5, 1, 4, 3, 6], 1)); //3
// console.log(countSubarrays([6, 5, 3, 4, 1, 2], 1)); //3
// console.log(countSubarrays([1], 1)); //1
// console.log(
//   countSubarrays(
//     [
//       66, 357, 526, 43, 52, 481, 346, 480, 65, 189, 96, 326, 186, 283, 695, 22,
//       693, 647, 106, 93, 412, 308, 218, 335, 559, 474, 29, 584, 462, 479, 114,
//       313, 692, 713, 541, 567, 44, 527, 447, 578, 118, 129, 663, 49, 627, 424,
//       350, 168, 133, 261, 361, 659, 139, 582, 434, 152, 433, 207, 330, 645, 27,
//       556, 452, 208, 517, 219, 575, 180, 98, 247, 506, 276, 167, 488, 10, 344,
//       209, 475, 624, 289, 458, 444, 682, 498, 185, 236, 687, 130, 212, 666, 568,
//       499, 153, 460, 551, 331, 337, 491, 126, 231, 720, 339, 72, 246, 431, 109,
//       714, 297, 87, 356, 327, 202, 343, 353, 19, 116, 722, 151, 310, 367, 40,
//       216, 30, 136, 36, 558, 643, 495, 299, 119, 580, 390, 94, 233, 182, 128,
//       18, 508, 450, 193, 709, 726, 85, 241, 64, 486, 591, 414, 429, 522, 493,
//       677, 652, 407, 101, 557, 35, 413, 275, 509, 646, 610, 396, 642, 378, 569,
//       320, 322, 349, 215, 5, 443, 688, 366, 408, 660, 392, 514, 160, 258, 658,
//       245, 644, 602, 138, 199, 448, 311, 603, 686, 73, 157, 583, 277, 623, 577,
//       263, 265, 303, 648, 438, 500, 716, 513, 342, 625, 386, 115, 653, 204, 140,
//       242, 312, 46, 389, 340, 187, 611, 641, 701, 111, 175, 518, 619, 586, 539,
//       439, 497, 710, 280, 587, 364, 437, 269, 649, 698, 205, 441, 292, 685, 144,
//       615, 158, 248, 307, 656, 566, 16, 147, 560, 67, 203, 89, 296, 163, 600,
//       244, 665, 150, 179, 190, 294, 676, 316, 655, 675, 631, 201, 487, 516, 71,
//       354, 293, 533, 123, 82, 338, 394, 24, 1, 51, 271, 184, 442, 290, 534, 622,
//       711, 520, 166, 573, 455, 9, 15, 124, 547, 141, 510, 131, 80, 14, 616, 601,
//       92, 323, 282, 211, 134, 459, 565, 449, 103, 614, 253, 597, 77, 154, 664,
//       523, 505, 417, 302, 694, 418, 606, 375, 95, 581, 723, 47, 243, 270, 398,
//       226, 358, 639, 399, 465, 401, 718, 446, 362, 466, 74, 463, 183, 691, 143,
//       721, 672, 590, 464, 668, 421, 281, 83, 45, 564, 708, 12, 120, 540, 415,
//       432, 717, 588, 553, 373, 435, 371, 112, 25, 548, 382, 377, 113, 376, 461,
//       596, 419, 550, 405, 50, 638, 309, 240, 700, 228, 23, 227, 563, 104, 472,
//       369, 671, 328, 336, 155, 428, 314, 502, 31, 172, 173, 552, 137, 222, 536,
//       332, 542, 197, 704, 78, 262, 524, 32, 206, 489, 232, 640, 169, 53, 478,
//       661, 589, 100, 214, 529, 108, 451, 630, 467, 306, 305, 670, 195, 301, 454,
//       406, 546, 351, 355, 599, 288, 34, 63, 321, 634, 504, 662, 13, 496, 512,
//       252, 699, 423, 188, 372, 317, 68, 626, 220, 56, 254, 333, 579, 635, 41,
//       162, 667, 60, 380, 2, 469, 370, 352, 697, 379, 545, 105, 360, 543, 107,
//       69, 696, 678, 654, 706, 75, 90, 132, 284, 62, 135, 595, 404, 4, 125, 385,
//       683, 485, 604, 420, 387, 680, 673, 255, 259, 388, 403, 174, 33, 304, 669,
//       223, 48, 609, 127, 617, 492, 528, 266, 530, 535, 88, 57, 286, 210, 594,
//       621, 102, 531, 122, 473, 39, 598, 37, 490, 194, 239, 427, 411, 572, 165,
//       519, 501, 719, 422, 400, 79, 156, 142, 234, 393, 176, 198, 285, 213, 657,
//       555, 58, 409, 374, 416, 17, 149, 532, 425, 613, 707, 59, 224, 170, 26,
//       230, 3, 633, 257, 70, 632, 620, 298, 274, 679, 574, 251, 554, 593, 576,
//       618, 410, 650, 544, 525, 456, 279, 384, 237, 483, 345, 592, 250, 20, 484,
//       705, 363, 482, 381, 264, 21, 38, 397, 315, 365, 121, 200, 11, 468, 585,
//       238, 561, 28, 221, 146, 702, 453, 272, 430, 612, 684, 319, 511, 712, 54,
//       81, 97, 99, 521, 515, 703, 177, 91, 391, 225, 278, 348, 181, 8, 291, 148,
//       476, 76, 608, 715, 538, 217, 260, 725, 86, 436, 256, 383, 7, 287, 267,
//       628, 471, 637, 690, 191, 570, 329, 229, 674, 477, 192, 494, 273, 402, 268,
//       445, 161, 347, 61, 457, 636, 368, 6, 507, 334, 235, 537, 395, 318, 196,
//       171, 295, 84, 359, 341, 178, 549, 300, 159, 426, 440, 651, 42, 324, 145,
//       110, 249, 724, 629, 164, 605, 503, 562, 689, 55, 681, 117, 470, 607, 325,
//       571,
//     ],
//     711
//   )
// ); //1
