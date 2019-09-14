/**
 * @param {number} k
 * @param {number[]} nums
 * int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(3);   // returns 4
kthLargest.add(5);   // returns 5
链接：https://leetcode-cn.com/problems/kth-largest-element-in-a-stream
*/
//构造最小堆，以及shiftUp\shiftDown\删除根节点
//将原数组构造成一个最小堆data，如果数组长度大于k,只保留前k大元素
//add一个元素时，数组长度<k时：将新元素加入最小堆中的合适位置，返回data[0]
//add一个元素时，数组长度=k时：此时data[0]已经时数组中第k大元素了，将新加入的元素与data[0]比较就好，小于等于data[0],新元素不能排入前k大，直接返回data[0];大于data[0]时，将data[0]替换成新元素，执行shiftDown
var KthLargest = function (k, nums) {
    this.data = nums
    this.k = k
    let len = this.data.length
    let parent = Math.floor((len - 2) / 2)
    this.shiftDown = function (k) {
        while (k * 2 + 1 < this.data.length) {
            let j = k * 2 + 1
            if (k * 2 + 2 < this.data.length && this.data[j] > this.data[j + 1]) {
                j += 1
            }
            if (this.data[k] > this.data[j]) {
                let m = this.data[k]
                this.data[k] = this.data[j]
                this.data[j] = m
                k = j
            } else {
                break
            }
        }
    }
    this.shiftUp = function (k) {
        while (k > 0) {
            let parent = Math.floor((k - 1) / 2)
            if (this.data[parent] > this.data[k]) {
                let m = this.data[k]
                this.data[k] = this.data[parent]
                this.data[parent] = m
                k = parent
            } else {
                break
            }
        }
    }
    this.extracMin = function () {
        this.data[0] = this.data[this.data.length - 1]
        this.data.pop()
        this.shiftDown(0)
    }
    for (parent; parent >= 0; parent--) {
        this.shiftDown(parent)
    }
    while (this.data.length > k) {
        this.extracMin()
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if (this.data.length < this.k) {
        this.data.push(val)
        this.shiftUp(this.data.length - 1)
    } else {
        if (val > this.data[0]) {
            this.data[0] = val
            this.shiftDown(0)
        }

    }
    return this.data[0]
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
let obj = new KthLargest(3, [5, -1])
// console.log(obj);
console.log(obj.add(2))
console.log(obj.add(1))
// console.log(obj.add(-4))
// console.log(obj.add(0))
// console.log(obj.add(4))


