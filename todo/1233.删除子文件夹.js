/*
 * @lc app=leetcode.cn id=1233 lang=javascript
 *
 * [1233] 删除子文件夹
 */

// @lc code=start
/**
 * @param {string[]} folder
 * @return {string[]}
 */

// 双指针
// i 代表父文件夹的最后一个
// j 当前遍历的forder[i]，
// forder[j] 去和0-i的父文件夹比较,前缀相同则是子文件夹，j+=1;否则i+=1 j+=1

var removeSubfolders = function (folder) {
  folder.sort();

  let i = 0;
  let j = 0;
  while (j < folder.length) {
    const curForder = folder[j];
    for (let m = 0; m < i; m += 1) {
      if (new RegExp(`/^${folder[m]}\//`).test(curForder)) {
        // 是子文件夹
        break;
      } else {
        i += 1;
      }
    }
  }
};
// @lc code=end

console.log(removeSubfolders(["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"])); //["/a","/c/d","/c/f"]
console.log(removeSubfolders(["/a", "/a/b/c", "/a/b/d"])); //["/a"]
console.log(removeSubfolders(["/a/b/c", "/a/b/ca", "/a/b/d"])); //["/a/b/c","/a/b/ca","/a/b/d"]
