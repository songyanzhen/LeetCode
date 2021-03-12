/*
 * @lc app=leetcode.cn id=132 lang=javascript
 *
 * [132] 分割回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  const isPalindrome = (str) => {
    let start = 0;
    let end = str.length - 1;
    while (start < end) {
      if (str[start] !== str[end]) {
        return false;
      }
      start += 1;
      end -= 1;
    }
    return true;
  };

  const dp = [-1];

  for (let i = 1; i <= s.length; i += 1) {
    dp[i] = i - 1; // 最多需要分i - 1次
    for (let j = i - 1; j >= 0; j -= 1) {
      const str = s.substring(j, i);
      if (isPalindrome(str)) {
        dp[i] = Math.min(dp[i], dp[j] + 1);
      }
    }
  }
  return dp[s.length];
};
