/**
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 维持一个包含K个最大数的最小堆，则第一个数就是数组中第K大的数
// 1.取数组的前k个数heapify
// 2.从k+1开始遍历数组，比堆的最小值还小，就跳过。否则，堆移除堆顶的最小元素后，放入新的元素heapify
var findKthLargest = function(nums, k) {
  //自上而下堆化
  var heapify=function(arr,k) {
    //从最后一个非叶子3节点开始，自上而下堆化
    for(let i=Math.floor(k/2)-1;i>=0;i--){
      let cur=i ;
      while(true){
        let minIndex=cur
        if(cur*2+1<=k-1&&arr[cur*2+1]<arr[cur])minIndex=cur*2+1
        if(cur*2+2<=k-1&&arr[cur*2+2]<arr[minIndex])minIndex=cur*2+2
        if(minIndex!==cur){
          [arr[cur],arr[minIndex]]=[arr[minIndex],arr[cur]]
          cur=minIndex
        } else{
          break
        }
      }
    }
    return arr
  }
    const heap=heapify(nums.slice(0,k),k)
    // if(k===1)return heap[0]
    for(let i=k;i<nums.length;i++){
      if(nums[i]>heap[0]){
        heap.shift()
        heap.push(nums[i])
        heapify(heap,k)
      }
    }
    return heap[0]
}; 



console.log(findKthLargest([3,2,1,5,6,4],2));//5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4));//4
console.log(findKthLargest([2,1],2));//1
console.log(findKthLargest([-1,2,0],1));//2
console.log(findKthLargest([-1,2,0],2));//0