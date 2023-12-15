/**
 * 给你一个整数数组 nums 和两个整数 k 和 t 。请你判断是否存在 两个不同下标 i 和 j，使得 abs(nums[i] - nums[j]) <= t ，同时又满足 abs(i - j) <= k 。

如果存在则返回 true，不存在返回 false。
输入：nums = [1,5,9,1,5,9], k = 2, t = 3
输出：false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/contains-duplicate-iii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @param {number} k index abs
 * @param {number} t val abs
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  const len=nums.length
  if(len<2) return false

  let ret=false

  for(let i=0;i<len-1;i+=1){
   let startInd=i-k<0?0:i-k
   if(startInd<=i){
     startInd=i+1
   }
    const endInd=i+k>len-1?len-1:i+k

    const minVal=nums[i]-t
    const maxVal=nums[i]+t

    for(let j=startInd;j<=endInd;j+=1){
      if(nums[j]>=minVal&&nums[j]<=maxVal){
        return true
      }

    }
  }
  return false
};

console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9],2,3));
console.log(containsNearbyAlmostDuplicate([1,2,3,1],3,0));
console.log(containsNearbyAlmostDuplicate([1,0,1,1],1,2));
console.log(containsNearbyAlmostDuplicate([4,2],2,1));//false