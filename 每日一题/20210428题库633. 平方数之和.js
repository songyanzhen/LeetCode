/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));

  while (left <= right) {
    const temp = left * left + right * right;

    if (temp === c) {
      return true;
    } else if (temp < c) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return false;
};
console.log(judgeSquareSum(18));
// @lc code=end
