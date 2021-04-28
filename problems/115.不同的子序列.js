/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
// dp[i][j] 代表 T 前 i 字符串可以由 S j 字符串组成最多个数.

var numDistinct = function (s, t) {
  const sLen = s.length;
  const tLen = t.length;

  const dp = [];
  for (let i = 0; i <= tLen; i += 1) {
    dp[i] = [];
  }

  for (let j = 0; j <= sLen; j += 1) {
    // 对于第一行, T 为空,因为空集是所有字符串子集, 所以我们第一行都是 1
    dp[0][j] = 1;
  }

  for (let i = 1; i <= tLen; i += 1) {
    // 对于第一列, S 为空,这样组成 T 个数当然为 0 了
    dp[i][0] = 0;
  }

  for (let i = 1; i <= tLen; i += 1) {
    for (let j = 1; j <= sLen; j += 1) {
      if (t[i - 1] === s[j - 1]) {
        // 匹配和t[i - 1]与s[j - 1]数量一样 + 不匹配和t[i]与s[j - 1]数量一样
        dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
      } else {
        // t[i - 1] !== s[j - 1] 时，和t[i]与s[j - 1]数量一样
        dp[i][j] = dp[i][j - 1];
      }
    }
  }

  return dp[tLen][sLen];
};

numDistinct("babgbag", "bag");
// @lc code=end
