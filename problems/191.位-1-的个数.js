/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// 当检查第 i 位时，我们可以让 n 与 2^i 进行与运算，当且仅当 n 的第 i 位为 1 时，运算结果不为 0
var hammingWeight = function (n) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    if ((n & (1 << i)) !== 0) {
      res++;
    }
  }
  return res;
};

hammingWeight(00000000000000000000000000001011);

console.log(00000000000000000000000000000000);
// @lc code=end
