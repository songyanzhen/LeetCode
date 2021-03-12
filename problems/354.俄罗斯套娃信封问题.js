/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  const len = envelopes.length;
  if (len == 0) return 0;

  const arr = envelopes.sort((a, b) => a[0] - b[0]);

  const dp = [];
  dp[0] = 1;
  let res = 1;

  for (let i = 1; i < len; i += 1) {
    let max = 0;
    for (let j = 0; j < i; j += 1) {
      if (arr[i][1] > arr[j][1] && arr[i][0] > arr[j][0]) {
        // dp[i] = max(dp[j]) + 1
        max = Math.max(max, dp[j]);
      }
    }
    dp[i] = max + 1;
    res = Math.max(res, dp[i]);
  }
  return res;
};
// @lc code=end
maxEnvelopes([
  [7, 8],
  [12, 16],
  [12, 5],
  [1, 8],
  [4, 19],
  [3, 15],
  [4, 10],
  [9, 16],
]);
