/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  const res = [];
  for (let i = 0; i < S.length; i += 1) {
    if (res.length === 0 || res[res.length - 1] !== S[i]) {
      res.push(S[i]);
    } else {
      res.pop();
    }
  }
  return res.join("");
};
// @lc code=end
