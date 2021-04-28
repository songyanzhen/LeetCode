/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  const arrM = [];
  const arrN = [];

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (matrix[i][j] === 0) {
        if (!arrM.includes(i)) {
          arrM.push(i);
        }
        if (!arrN.includes(j)) {
          arrN.push(j);
        }
      }
    }
  }

  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (arrM.includes(i) || arrN.includes(j)) matrix[i][j] = 0;
    }
  }
};

setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]);
// @lc code=end
