/*
 * @lc app=leetcode.cn id=766 lang=javascript
 *
 * [766] 托普利茨矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  const m = matrix[0].length;
  const n = matrix.length;

  for (let i = 0; i < n - 1; i += 1) {
    const line1 = matrix[i].filter((item, index) => index !== m - 1);
    const line2 = matrix[i + 1].filter((item, index) => index !== 0);
    if (JSON.stringify(line1) !== JSON.stringify(line2)) {
      return false;
    }
  }

  return true;
};
// @lc code=end
console.log(
  isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ])
);
