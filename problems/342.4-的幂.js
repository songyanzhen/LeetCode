/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  // (n & (n - 1)) === 0 是否是2的幂
  // 4的幂奇数位为1
  // 0b表示二进制
  return (
    n > 0 &&
    (n & (n - 1)) === 0 &&
    (n & 0b10101010101010101010101010101010) === 0
  );
};
// @lc code=end
