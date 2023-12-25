# 二分法
[leetcode专项](https://leetcode.cn/leetbook/read/binary-search)
- 识别：查找目标元素或索引，缩减一半空间
- 步骤：
  - 预处理 —— 如果集合未排序，则进行排序。
  - 二分查找 —— 使用循环或递归在每次比较后将查找空间划分为两半。
  - 后处理 —— 在剩余空间中确定可行的候选者。


- template1
<script>
  function binarySearch(arr, target) {
    //在arr[l……r]范围内查找目标值
    let l = 0;
    let r = arr.length - 1
    while (l <= r) {
        let mid = l +(r-l)>>1//查找范围的中间值
        if (arr[mid] === target) {
            return mid
        }
        if (arr[mid] < target) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return -1
}
</script>
- [x] [LCR173](https://leetcode.cn/problems/que-shi-de-shu-zi-lcof/solution/)
- [x] [162.寻找峰值](https://leetcode.cn/problems/find-peak-element/solution/)
- [x] [平方数](https://leetcode-cn.com/problems/sqrtx)


- template2
- [LCR第一个错误版本.js]()
- [153.旋转数组中的最小值](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array)


### 待分类
- [35.搜索插入位置](https://leetcode-cn.com/problems/search-insert-position/)




但当数组中有重复元素时，不能保证目标值出现的位置

二分查找常用的两个方法：

floor方法：第一次出现的位置或者不存在时最后一个比目标值小的元素

ceil方法：最后一次出现的位置或者不存在时第一个比目标值大的元素

<script>
//floor方法：返回目标值第一次出现的位置或者目标值不存在时最后一个比目标值小的元素
// 如果找到target, 返回第一个target相应的索引index
// 如果没有找到target, 返回比target小的最大值相应的索引, 如果这个最大值有多个, 返回最大索引
// 如果这个target比整个数组的最小元素值还要小, 则不存在这个target的floor值, 返回-1
function binarySearchFloor(arr, target) {
    if(arr[0]>target){
        return -1
    }
    //在arr[l……r]范围内查找目标值
    let l = 0;
    let r = arr.length - 1
    while (l <r) {
        let mid = Math.floor((l + r) / 2)+1//查找范围的中间值
        if (arr[mid] < target) {
            l = mid
        } else {
            r = mid - 1
        }
    }
    if(l+1<arr.length&&arr[l+1]===target){
        return l+1
    }
    return arr[l]
}
</script>


 <script>
//ceil方法：返回目标值最后一次出现的位置或者不存在时第一个比目标值大的元素
// 如果找到target, 返回最后一个target相应的索引index
// 如果没有找到target, 返回比target大的最小值相应的索引, 如果这个最小值有多个, 返回最小的索引
// 如果这个target比整个数组的最大元素值还要大, 则不存在这个target的ceil值, 返回整个数组元素个数n
function binarySearchCeil(arr, target) {
    //在arr[l……r]范围内查找目标值
    let l = 0;
    let r = arr.length - 1
    if(arr[r]<target){
        return r+1
    }
    while (l <r) {
        let mid = Math.floor((l + r) / 2)-1//查找范围的中间值
        if (arr[mid] <= target) {
            l = mid+1
        } else {
            r =mid
        }
    }
    if(r-1>0&&arr[r-1]===target){
        return r-1
    }
    return arr[r]
}
</script>
