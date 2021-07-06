/*
 * @lc app=leetcode.cn id=1269 lang=javascript
 *
 * [1269] 停在原地的方案数
 */

// @lc code=start
/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
//  dp[i][j] 表示在 i 步操作之后，指针位于下标 j 的方案数
var numWays = function (steps, arrLen) {
  const MODULO = 1000000007;
  let maxColumn = Math.min(arrLen - 1, Math.ceil(steps + 1));
  const dp = new Array(steps + 1)
    .fill(0)
    .map(() => new Array(maxColumn + 1).fill(0));

  dp[0][0] = 1;
  for (let i = 1; i <= steps; i += 1) {
    for (let j = 0; j <= maxColumn; j += 1) {
      dp[i][j] = dp[i - 1][j];
      if (j - 1 >= 0) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % MODULO;
      }
      if (j + 1 <= maxColumn) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j + 1]) % MODULO;
      }
    }
  }
  return dp[steps][0];
};
// @lc code=end
