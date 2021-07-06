/*
 * @lc app=leetcode.cn id=1486 lang=javascript
 *
 * [1738] 找出第 K 大的异或坐标值
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 * 设二维前缀和 pre(i, j) 表示矩阵 matrix 中所有满足 0≤x<i 且 0≤y<j 的元素执行按位异或运算的结果。
 */

var kthLargestValue = function (matrix, k) {
  const m = matrix.length;
  const n = matrix[0].length;
  const pre = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  const res = [];
  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      pre[i][j] =
        pre[i - 1][j] ^
        pre[i][j - 1] ^
        pre[i - 1][j - 1] ^
        matrix[i - 1][j - 1];
      res.push(pre[i][j]);
    }
  }
  res.sort((a, b) => b - a);
  return res[k - 1];
};
// @lc code=end
