/*
 * @lc app=leetcode.cn id=664 lang=javascript
 *
 * [664] 奇怪的打印机
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function (s) {
  const n = s.length;
  const f = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    f[i][i] = 1;
    for (let j = i + 1; j < n; j++) {
      if (s[i] == s[j]) {
        f[i][j] = f[i][j - 1];
      } else {
        let minn = Number.MAX_SAFE_INTEGER;
        for (let k = i; k < j; k++) {
          minn = Math.min(minn, f[i][k] + f[k + 1][j]);
        }
        f[i][j] = minn;
      }
    }
  }
  return f[0][n - 1];
};
// @lc code=end

// 思路分析： 使用动态规划法。dp[i][j]代表的是s[i, j]段打印的最少次数
// 状态转移方程：打印s[i, j]这段共有三种情况

// 第一种：dp[i][j] = 1 + dp[i + 1][j];//i单独打印， s[i + 1, j]段另外打印
// 第二种：dp[i][j] = min(dp[i][j], dp[i + 1][k] + dp[k + 1][j]);//dp[i + 1][k]代表将i放到[i+ 1, k]一起打印，dp[k + 1][j]代表[k + 1, j]另外打印，（s[i] == s[k])
// 第三种：dp[i][j] = min(dp[i][j], dp[i + 1][j]);//dp[i + 1][j]代表将i放入[j + 1, i]一起打印(s[i] == s[j])
