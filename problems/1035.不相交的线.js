/*
 * @lc app=leetcode.cn id=1035 lang=javascript
 *
 * [1035] 不相交的线
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;

  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      dp[i][j] =
        nums1[i - 1] === nums2[j - 1]
          ? dp[i - 1][j - 1] + 1
          : Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }

  return dp[m][n];
};

maxUncrossedLines([1, 4, 2], [1, 2, 4]);
// @lc code=end
