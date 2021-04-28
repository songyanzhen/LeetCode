/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  let pos = 0;

  for (let i = 0; i < m; i += 1) {
    if (matrix[i][0] < target) {
      pos = i;
    } else if (matrix[i][0] === target) {
      return true;
    } else {
      break;
    }
  }

  for (let j = 1; j < n; j += 1) {
    if (matrix[pos][j] === target) {
      return true;
    }
  }

  return false;
};
// @lc code=end
