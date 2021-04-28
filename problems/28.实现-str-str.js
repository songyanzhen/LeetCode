/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) {
    return 0;
  }

  for (let i = 0; i <= haystack.length - needle.length; i += 1) {
    let pos = 0;
    while (haystack[i + pos] === needle[pos] && pos < needle.length) {
      pos += 1;
    }
    console.log(pos);
    if (pos === needle.length) {
      return i;
    }
  }

  return -1;
};

strStr("c", "c");
// @lc code=end
