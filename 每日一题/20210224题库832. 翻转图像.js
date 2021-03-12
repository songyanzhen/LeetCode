/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 翻转图像
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  const length = A.length;

  const res = [];

  for (let i = 0; i < length; i += 1) {
    res[i] = [];
    for (let j = length - 1; j >= 0; j -= 1) {
      res[i].push(A[i][j] ? 0 : 1);
    }
  }

  return res;
};
// @lc code=end
