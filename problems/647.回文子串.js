/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */
/**
 * @param {string} s
 * @return {number}
 */
// 从当前索引向两边扩张来判断，i,j分别是左边和右边的指示。
var countSubstrings = function(s) {
  let count = 0
  let len = s.length
  function find (i, j) {
      while (i >= 0 && j <len && s[i] == s[j]) {
          count += 1
          i--
          j++
      }
  }
  for (let i = 0; i < len; i++) {
      find(i, i)
      find(i, i + 1)
  }
  return count
};

