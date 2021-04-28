/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = s.split(" ");

  const res = [];

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (!!arr[i]) {
      res.push(arr[i]);
    }
  }

  return res.join(" ");
};
// @lc code=end
