/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

const NUM = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

var romanToInt = function (s) {
  let res = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i + 1] && NUM[s[i]] < NUM[s[i + 1]]) {
      res -= NUM[s[i]];
    } else {
      res += NUM[s[i]];
    }
  }

  return res;
};
// @lc code=end
