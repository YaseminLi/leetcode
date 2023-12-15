
 /*** @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 * https://leetcode-cn.com/problems/grumpy-bookstore-owner/solution/ai-sheng-qi-de-shu-dian-lao-ban-by-leetc-dloq/
 */

 //暴力循环超时了
var maxSatisfied = function(customers, grumpy, X) {
    let maxSatisfied=0
    for(let i=0;i<customers.length;i+=1){
        let currentSatisfied=0
        for (let j=0;j<customers.length;j+=1){
            if(j<i||(i+X)<=j){
                currentSatisfied+=(!grumpy[j]?customers[j]:0)
            }else{
                currentSatisfied+=customers[j]
            }
        }
        maxSatisfied=maxSatisfied>currentSatisfied?maxSatisfied:currentSatisfied
    }
    return maxSatisfied
};

//定一个长度为X的滑动窗口，当滑动窗口中的老板抑制生气时所增加的顾客最大时，也即当天顾客最大的满意数（不抑制情绪时顾客满意数是一定的）

var maxSatisfied = function(customers, grumpy, X) {
  if(!X)X=1
 let total =0
 grumpy.forEach((item,index) => {
   if(!item)total+=customers[index]
 });

 let maxIncrease=0
 //活动窗口的左侧从0开始
 for(let i=0;i<customers.length-(X-1);i+=1){
    let increase=0
    for(let j=0;j<X;j+=1){
      if(grumpy[i+j]){
        increase+=customers[i+j]
      }
    }
    maxIncrease=maxIncrease>increase?maxIncrease:increase
 }

 return total+maxIncrease
};

console.log(maxSatisfied([1,0,1,2,1,1,7,5],[0,1,0,1,0,1,0,1],3));
console.log(maxSatisfied([3],[1]));