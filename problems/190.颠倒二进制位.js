/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
// 将 n 视作一个长为 32 的二进制串，从低位往高位枚举 n 的每一位，将其倒序添加到翻转结果 rev 中。

// 代码实现中，每枚举一位就将 n 右移一位，这样当前 n 的最低位就是我们要枚举的比特位。当 n 为 0 时即可结束循环。

var reverseBits = function (n) {
  let rev = 0;
  for (let i = 0; i < 32 && n > 0; i += 1) {
    rev |= (n & 1) << (31 - i);
    n = n >> 1;
  }
  return rev >>> 0;
};
// @lc code=end

console.log(00000010100101000001111010011100);
