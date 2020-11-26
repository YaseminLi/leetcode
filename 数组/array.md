### 数组类相关问题总结
1. 堆
2. 对撞指针
3. 滑动窗口


1. 堆
- [kth-largest-element-in-an-array](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)

2. 对撞指针

指针 i 和 j 分别指向数组的第一个元素和最后一个元素，然后指针 i 不断向前， 指针 j 不断递减，直到 i = j
- [container-with-most-water](https://leetcode-cn.com/problems/container-with-most-water/)
- [reverse-vowels-of-a-string](https://leetcode-cn.com/problems/reverse-vowels-of-a-string/)
- [valid-palindrome](https://leetcode-cn.com/problems/valid-palindrome/)
- [two-sum-ii-input-array-is-sorted](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)

3. 滑动窗口

涉及到**连续子数组**的问题，根据条件变动左右边界，相当于一个滑块在数组上滑动，直到将数组遍历结束。

- [长度最小的子数组](https://leetcode-cn.com/problems/minimum-size-subarray-sum/)