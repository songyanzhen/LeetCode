/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const n = matrix[0].length;
  const res = [];
  const arr = matrix.flat();

  console.log(res);

  for (let i = 0; i < arr.length; i += 1) {
    const index = i % n;
    if (!res[index]) {
      res[index] = [];
    }
    res[index].push(arr[i]);
  }
  return res;
};

transpose([
  [1, 2, 3],
  [4, 5, 6],
]);
// @lc code=end
