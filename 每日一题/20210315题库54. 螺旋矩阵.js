/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  const totalLen = m * n;
  const res = []
  const newMatrix = [];
  newMatrix.push(new Array(n + 2).fill(101));
  for (let i =0;i < m; i += 1) {
    newMatrix.push([101, ...matrix[i], 101]);
  }
  newMatrix.push(new Array(n + 2).fill(101));

  let i = 1; j = 1;

  let direction = 0;
  let count= 0

  while(count < totalLen) {
    if (newMatrix[i][j] !== 101) {
      res.push(newMatrix[i][j]);
      newMatrix[i][j] = 101;
      count += 1;
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

spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]);
// @lc code=end

