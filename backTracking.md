## 回溯算法
是对树形结构的深度优先遍历。实际上类似枚举的搜索尝试过程，在遍历的过程中寻找问题的解。

深度优先遍历有个特点：当发现已不满足求解条件时，就返回，尝试别的路径。此时对象类型变量就需要重置成为和之前一样，称为「状态重置」。


寻找**所有可行解的题**，都可以尝试用「回溯」的方法来解决，并在回溯过程，进行剪枝使程序运行更快。

- [Permutations](https://leetcode-cn.com/problems/permutations/)
- [combination-sum](https://leetcode-cn.com/problems/combination-sum/)