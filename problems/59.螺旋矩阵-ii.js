/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const res = [];
  for (let i = 0; i < n; i += 1) {
    res[i] = [];
  }

  let i = 0;
  let j = 0;
  let num = 1;
  let direction = 0;
  while (num <= n * n) {
    if (i < n && j < n && i >= 0 && j >= 0 && !res[i][j]) {
      res[i][j] = num;
      num += 1;
    } else {
      // 走错了，回头
      if (direction === 0) {
        // 向右
        j -= 1;
      } else  if (direction === 1) {
        // 向下
        i -= 1;
      } else  if (direction === 2) {
        // 向左
        j += 1;
      } else  if (direction === 3) {
        // 向上
        i += 1;
      }
      // 改方向
      direction = direction === 3 ? 0 : direction + 1;
    }
    if (direction === 0) {
      // 向右
      j += 1;
    } else  if (direction === 1) {
      // 向下
      i += 1;
    } else  if (direction === 2) {
      // 向左
      j -= 1;
    } else  if (direction === 3) {
      // 向上
      i -= 1;
    }
  }

  return res;
};
generateMatrix(3);
// @lc code=end

