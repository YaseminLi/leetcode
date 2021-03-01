/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums=nums
  };
  
  /** 
   * @param {number} i 
   * @param {number} j
   * @return {number}
   */
  NumArray.prototype.sumRange = function(i, j) {
    const nums=this.nums
  let sum=0,calculate=false;
  for (let k=0;k<nums.length;k+=1){
    if(i===k){
      calculate=true
    }
    if(calculate){
      sum+=nums[k]
    }
    if(j===k){
      break
    }
  }
  return sum
  };
  
  /**
   * Your NumArray object will be instantiated and called as such:
   * var obj = new NumArray(nums)
   * var param_1 = obj.sumRange(i,j)
   */

   const obj=new NumArray([-2, 0, 3, -5, 2, -1])
   console.log(obj.sumRange(0,2));
   console.log(obj.sumRange(2,5));
   console.log(obj.sumRange(0,5));