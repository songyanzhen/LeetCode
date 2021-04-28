/*
 * @lc app=leetcode.cn id=363 lang=javascript
 *
 * [363] 矩形区域不超过 K 的最大数值和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function (matrix, k) {
  const m = matrix.length;
  const n = matrix[0].length;

  let res = -Infinity;
  // 枚举上边界
  for (let i = 0; i < m; i += 1) {
    const sumArr = [];
    // 枚举下边界
    for (let j = i; j < m; j += 1) {
      for (let k = 0; k < n; k += 1) {
        if (sumArr[k]) {
          sumArr[k] += matrix[j][k];
        } else {
          sumArr[k] = matrix[j][k];
        }
      }

      for (let a = 0; a < sumArr.length; a += 1) {
        let tempSum = sumArr[a];
        if (tempSum <= k) {
          res = Math.max(res, tempSum);
        }
        for (let b = a + 1; b < sumArr.length; b += 1) {
          tempSum += sumArr[b];
          if (tempSum <= k) {
            res = Math.max(res, tempSum);
          }
        }
      }
    }
  }
  return res;
};
maxSumSubmatrix(
  [
    [1, 0, 1],
    [0, -2, 3],
  ],
  2
);
// @lc code=end

// for (int i = 0; i < m; ++i) { // 枚举上边界
//     int[] sum = new int[n];
//     for (int j = i; j < m; ++j) { // 枚举下边界
//         for (int c = 0; c < n; ++c) {
//             sum[c] += matrix[j][c]; // 更新每列的元素和
//         }
//         TreeSet<Integer> sumSet = new TreeSet<Integer>();
//         sumSet.add(0);
//         int s = 0;
//         for (int v : sum) {
//             s += v;
//             Integer ceil = sumSet.ceiling(s - k);
//             if (ceil != null) {
//                 ans = Math.max(ans, s - ceil);
//             }
//             sumSet.add(s);
//         }
//     }
// }
// return ans;
