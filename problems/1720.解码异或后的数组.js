/*
 * @lc app=leetcode.cn id=1720 lang=javascript
 *
 * [1720] 解码异或后的数组
 */

// @lc code=start
/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  const arr = [first];

  for (let i = 0; i < encoded.length; i += 1) {
    const temp = arr[arr.length - 1];
    const cur = encoded[i];
    arr.push(temp ^ cur);
  }

  return arr;
};
// @lc code=end
