### 数组类相关问题总结
1. 对数组的操作
2. 滑动指针
3. 二分法
4. 二维数组
5. 堆
6. 对撞指针
7. 滑动窗口



### 题目

1. 对数组的操作

数组中的元素在内存中连续存储。

- 读取元素。先找到索引0的内存地址，再加上索引值读取目标元素，时间复杂度o(1)
- 查找元素。先找到索引0的内存地址，从头至尾遍历每个元素，与目标元素相同时停止查找，时间复杂度o(n)
- 插入和删除元素。插入前需腾出空间，删除后需要对空缺位置填补，时间复杂度o(n)

2. 滑动指针

只需要一个指针，当前指针元素满足条件，或者指针将数组分成左右两部分后满足条件

- [x] [724.find-pivot-index](https://leetcode-cn.com/problems/find-pivot-index/)

3. 二分法

对于一个排序数组，可以采用二分法，通过与中间值的比较判断在哪个区域。

- [x] [35.search-insert-position](https://leetcode-cn.com/problems/search-insert-position/)

4. 滑动窗口

涉及到**连续子数组**的问题，根据条件变动左右边界，相当于一个滑块在数组上滑动，直到将数组遍历结束。

- [x] [209.长度最小的子数组](https://leetcode-cn.com/problems/minimum-size-subarray-sum/)

5. 堆

- [kth-largest-element-in-an-array](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)


6. 对撞指针

指针 i 和 j 分别指向数组的第一个元素和最后一个元素，然后指针 i 不断向前， 指针 j 不断递减，直到 i = j

- [x] [11.container-with-most-water](https://leetcode-cn.com/problems/container-with-most-water/)
- [x] [345.reverse-vowels-of-a-string](https://leetcode-cn.com/problems/reverse-vowels-of-a-string/)
- [x] [125.valid-palindrome](https://leetcode-cn.com/problems/valid-palindrome/)
- [x] [167.two-sum-ii-input-array-is-sorted](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)

7. 二维数组：矩阵旋转、对角线遍历，以及对子矩阵的操作

8. 哈希表
- [x] [1.two-sum](https://leetcode.cn/problems/two-sum/description/)


待分类
- [合并区间](https://leetcode-cn.com/problems/merge-intervals/)